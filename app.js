document.addEventListener('DOMContentLoaded', () => {

    // Global UI references
    const sidebarNav = document.getElementById('sidebar-nav');
    const readingTitle = document.getElementById('reading-title');
    const markdownContainer = document.getElementById('markdown-container');
    const overviewTitle = document.getElementById('overview-title');
    const overviewList = document.getElementById('overview-list');
    const tabReview = document.getElementById('tab-review');
    const tabFlashcards = document.getElementById('tab-flashcards');

    // File list to dynamically generate sidebar
    const fileList = [
        '11.md', '12.md', "13.md"
    ];

    let isEditing = false;
    let currentSectionId = null;
    let currentFileSections = [];
    let currentSectionIndex = 0;

    async function buildSidebar() {
        sidebarNav.innerHTML = '<h2 class="sidebar-title">Table of Contents</h2>';
        for (let i = 0; i < fileList.length; i++) {
            const filename = fileList[i];
            try {
                const response = await fetch(`readings/${filename}`);
                if (!response.ok) continue;
                const text = await response.text();

                // Extract group title from a hidden HTML comment
                let groupTitleMatch = text.match(/<!--\s*GROUP-TITLE:\s*(.*?)\s*-->/i);
                let groupTitle = groupTitleMatch ? groupTitleMatch[1] : filename.replace('.md', '');

                // Parse sections (#) and subsections (##)
                let lines = text.split('\n');
                let currentSection = null;
                let sections = [];

                let chapterId = filename.replace('.md', '');

                for (let line of lines) {
                    let h1Match = line.match(/^#\s+([0-9\.]+)?\s*(.*)/);
                    if (h1Match) {
                        let secNum = h1Match[1] ? h1Match[1].trim() : chapterId;
                        let secTitle = h1Match[2].trim();
                        currentSection = { num: secNum, title: secTitle, subsections: [] };
                        sections.push(currentSection);
                    } else if (currentSection) {
                        let h2Match = line.match(/^##\s+([0-9\.]+)\s+(.*)/);
                        if (h2Match) {
                            currentSection.subsections.push({ num: h2Match[1], name: h2Match[2] });
                        }
                    }
                }

                let navGroupHTML = `
                    <div class="nav-group-header">
                        <button class="nav-toggle-btn ${i === 0 ? 'active' : ''}"><span class="arrow">▼</span></button>
                        <a href="#" class="nav-link chapter-link ${i === 0 ? 'current' : ''}" data-file="${filename}" data-section="${chapterId}">${groupTitle}</a>
                    </div>
                `;
                let groupContentHTML = `<div class="nav-content ${i === 0 ? 'active-content' : ''}">`;

                for (let s of sections) {
                    groupContentHTML += `
                        <div class="nav-group sub-group">
                            <div class="nav-group-header">
                                <button class="nav-toggle-btn"><span class="arrow">▼</span></button>
                                <a href="#" class="nav-link sub-link" data-file="${filename}" data-section="${s.num}">${s.num} ${s.title}</a>
                            </div>
                            <div class="nav-content sub-content">
                                ${s.subsections.map(sub => `<a href="#" class="nav-link leaf-node" data-file="${filename}" data-section="${sub.num}">${sub.num} ${sub.name}</a>`).join('\n')}
                            </div>
                        </div>
                    `;
                }

                groupContentHTML += `</div>`;

                const navGroup = document.createElement('div');
                navGroup.className = i === 0 ? 'nav-group active' : 'nav-group';
                navGroup.innerHTML = navGroupHTML + groupContentHTML;
                sidebarNav.appendChild(navGroup);
            } catch (e) {
                console.error('Error fetching ' + filename, e);
            }
        }
        attachSidebarListeners();
    }

    function attachSidebarListeners() {
        // Collapsible Logic
        const navToggles = document.querySelectorAll('.nav-toggle-btn');
        navToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.stopPropagation();
                toggle.classList.toggle('active');
                const header = toggle.closest('.nav-group-header');
                const content = header.nextElementSibling;
                if (content && content.classList.contains('nav-content')) {
                    content.classList.toggle('active-content');
                }
            });
        });

        // Click Logic
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', async (e) => {
                e.preventDefault();

                // Auto-save if clicking away while editing
                if (isEditing) {
                    saveEdits(currentSectionId);
                    isEditing = false;
                    const editBtn = document.getElementById('btn-edit-mode');
                    if (editBtn) {
                        editBtn.textContent = 'Edit Content';
                        editBtn.classList.remove('editing');
                    }
                    fetch('/api/save', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(studyData)
                    }).catch(err => console.error(err));
                }

                const file = link.getAttribute('data-file');
                const section = link.getAttribute('data-section');

                // Only fetch if it's a new file
                if (markdownContainer.getAttribute('data-loaded') !== file) {
                    await fetchMarkdown(file, section);
                    markdownContainer.setAttribute('data-loaded', file);
                } else {
                    const idx = currentFileSections.findIndex(s => s.id === section);
                    if (idx !== -1) {
                        window.renderActiveSubsection(idx);
                    }
                }
            });
        });

        // Load initial link
        if (navLinks.length > 0) {
            navLinks[0].click();
        }
    }

    // 2. Tabs Logic (Review vs Flashcards)
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(`tab-${tabId}`).classList.add('active');
        });
    });

    // Helper to attach reveal logic
    function attachRevealLogic() {
        const revealBtns = document.querySelectorAll('.btn-reveal');
        revealBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const answerText = btn.nextElementSibling;
                if (answerText.classList.contains('show')) {
                    answerText.classList.remove('show');
                    btn.textContent = 'Reveal Answer';
                } else {
                    answerText.classList.add('show');
                    btn.textContent = 'Hide Answer';
                }
            });
        });
    }

    // Carousel scrolling
    window.scrollCarousel = function (btn, dir) {
        const container = btn.parentElement.querySelector('.carousel-container');
        const width = container.clientWidth;
        container.scrollBy({ left: dir * width, behavior: 'smooth' });
        
        // Sync indicator if it exists
        setTimeout(() => {
            const items = Array.from(container.children);
            let activeIdx = 0;
            let minDiff = Infinity;
            items.forEach((item, idx) => {
                const diff = Math.abs(item.offsetLeft - container.scrollLeft);
                if (diff < minDiff) {
                    minDiff = diff;
                    activeIdx = idx;
                }
            });
            const wrapper = container.closest('.interactive-review');
            if (wrapper) {
                const dots = wrapper.querySelectorAll('.carousel-indicators .q-ind');
                dots.forEach((dot, i) => {
                    dot.style.boxShadow = (i === activeIdx) ? '0 0 0 2px var(--accent-color)' : 'none';
                });
            }
        }, 300);
    }

    window.scrollToCarouselItem = function (btn, idx) {
        const wrapper = btn.closest('.interactive-review');
        if (!wrapper) return;
        const container = wrapper.querySelector('.carousel-container');
        if (container && container.children[idx]) {
            container.scrollTo({ left: container.children[idx].offsetLeft, behavior: 'smooth' });
            
            // Sync dots
            const dots = wrapper.querySelectorAll('.carousel-indicators .q-ind');
            dots.forEach((dot, i) => {
                dot.style.boxShadow = (i === idx) ? '0 0 0 2px var(--accent-color)' : 'none';
            });
        }
    }

    window.setQuestionStatus = function(btn, idx, status) {
        const wrapper = btn.closest('.interactive-review');
        if (wrapper) {
            const ind = wrapper.querySelector('#q-ind-' + idx);
            if (ind) {
                if (status === 'correct') {
                    ind.style.backgroundColor = '#10b981';
                    ind.dataset.status = 'correct';
                }
                if (status === 'wrong') {
                    ind.style.backgroundColor = '#ef4444';
                    ind.dataset.status = 'wrong';
                }
            }
            // Auto advance
            const container = wrapper.querySelector('.carousel-container');
            if (container && idx < container.children.length - 1) {
                setTimeout(() => {
                    window.scrollToCarouselItem(btn, idx + 1);
                }, 400);
            }
        }
    }

    const editBtn = document.getElementById('btn-edit-mode');

    // Show edit button only on localhost
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        editBtn.style.display = 'block';
    }

    editBtn.addEventListener('click', async () => {
        if (!currentSectionId) return;

        if (!isEditing) {
            // Enter Edit Mode
            isEditing = true;
            editBtn.textContent = 'Save Content';
            editBtn.classList.add('editing');
            renderEditMode(currentSectionId);
        } else {
            // Save and Exit Edit Mode
            saveEdits(currentSectionId);
            isEditing = false;
            editBtn.textContent = 'Edit Content';
            editBtn.classList.remove('editing');

            // Save to backend
            try {
                await fetch('/api/save', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(studyData)
                });
            } catch (err) {
                console.error('Failed to save', err);
                alert('Failed to save to data.js');
            }

            populateStudyPanel(currentSectionId);
        }
    });

    function renderEditMode(sectionId) {
        if (!studyData[sectionId]) {
            studyData[sectionId] = {
                overview: [],
                questions: [],
                flashcards: []
            };
        }
        const data = studyData[sectionId];

        overviewList.innerHTML = `<textarea id="edit-overview" class="edit-textarea" rows="6">${data.overview.join('\n')}</textarea>`;

        let qHTML = `<div id="edit-questions-container">`;
        data.questions.forEach((q, i) => {
            qHTML += `
            <div class="edit-group">
                <label>Question ${i + 1}:</label>
                <input type="text" class="edit-q-input" value="${q.q.replace(/"/g, '&quot;')}">
                <label>Answer:</label>
                <textarea class="edit-a-input">${q.a}</textarea>
                <button class="btn-delete" onclick="this.parentElement.remove()">Delete</button>
            </div>`;
        });
        qHTML += `</div><button id="btn-add-q" class="btn-add">+ Add Question</button>`;
        tabReview.innerHTML = qHTML;

        let fHTML = `<div id="edit-flashcards-container">`;
        data.flashcards.forEach((f, i) => {
            fHTML += `
            <div class="edit-group">
                <label>Front:</label>
                <input type="text" class="edit-f-front" value="${f.front.replace(/"/g, '&quot;')}">
                <label>Back:</label>
                <textarea class="edit-f-back">${f.back}</textarea>
                <button class="btn-delete" onclick="this.parentElement.remove()">Delete</button>
            </div>`;
        });
        fHTML += `</div><button id="btn-add-f" class="btn-add">+ Add Flashcard</button>`;
        tabFlashcards.innerHTML = fHTML;

        document.getElementById('btn-add-q').addEventListener('click', () => {
            const div = document.createElement('div');
            div.className = 'edit-group';
            div.innerHTML = `
                <label>Question:</label>
                <input type="text" class="edit-q-input" value="">
                <label>Answer:</label>
                <textarea class="edit-a-input"></textarea>
                <button class="btn-delete" onclick="this.parentElement.remove()">Delete</button>`;
            document.getElementById('edit-questions-container').appendChild(div);
        });

        document.getElementById('btn-add-f').addEventListener('click', () => {
            const div = document.createElement('div');
            div.className = 'edit-group';
            div.innerHTML = `
                <label>Front:</label>
                <input type="text" class="edit-f-front" value="">
                <label>Back:</label>
                <textarea class="edit-f-back"></textarea>
                <button class="btn-delete" onclick="this.parentElement.remove()">Delete</button>`;
            document.getElementById('edit-flashcards-container').appendChild(div);
        });
    }

    function saveEdits(sectionId) {
        const data = studyData[sectionId];

        const overviewText = document.getElementById('edit-overview').value;
        data.overview = overviewText.split('\n').map(s => s.trim()).filter(s => s);

        const qGroups = document.querySelectorAll('#edit-questions-container .edit-group');
        data.questions = [];
        qGroups.forEach(g => {
            const q = g.querySelector('.edit-q-input').value.trim();
            const a = g.querySelector('.edit-a-input').value.trim();
            if (q && a) data.questions.push({ q, a });
        });

        const fGroups = document.querySelectorAll('#edit-flashcards-container .edit-group');
        data.flashcards = [];
        fGroups.forEach(g => {
            const front = g.querySelector('.edit-f-front').value.trim();
            const back = g.querySelector('.edit-f-back').value.trim();
            if (front && back) data.flashcards.push({ front, back });
        });
    }

    window.renderActiveSubsection = function (index) {
        if (index < 0 || index >= currentFileSections.length) return;
        currentSectionIndex = index;

        if (isEditing) {
            saveEdits(currentSectionId);
            isEditing = false;
            editBtn.textContent = 'Edit Content';
            editBtn.classList.remove('editing');
            fetch('/api/save', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(studyData)
            }).catch(e => console.error(e));
        }

        const section = currentFileSections[index];

        let html = '';

        // Top nav button
        if (index > 0) {
            html += `<div class="section-nav top" onclick="renderActiveSubsection(${index - 1})">
                        <span class="icon">▲</span> Previous: ${currentFileSections[index - 1].id}
                     </div>`;
        }

        html += `<div class="subsection-content">${section.html}</div>`;

        // Bottom nav button
        if (index < currentFileSections.length - 1) {
            html += `<div class="section-nav bottom" onclick="renderActiveSubsection(${index + 1})">
                        <span class="icon">▼</span> Next: ${currentFileSections[index + 1].id}
                     </div>`;
        } else {
            html += `<div class="section-nav bottom end">
                        <span class="icon">🏁</span> End of Material
                     </div>`;
        }

        markdownContainer.innerHTML = html;

        // Update panel
        populateStudyPanel(section.id);

        // Highlight sidebar
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(l => l.classList.remove('current'));
        for (let link of navLinks) {
            if (link.getAttribute('data-section') === section.id) {
                link.classList.add('current');
                
                // Set the main reading title to the section name
                let chapterName = link.textContent.replace('▼', '').trim();
                document.getElementById('reading-title').textContent = chapterName;

                const groupContent = link.closest('.nav-content');
                if (groupContent && !groupContent.classList.contains('active-content')) {
                    groupContent.classList.add('active-content');
                    const toggleBtn = groupContent.previousElementSibling;
                    if (toggleBtn) toggleBtn.classList.add('active');
                }
                break;
            }
        }

        // Scroll to top of reading area
        const readingBox = document.querySelector('.reading-content');
        if (readingBox) readingBox.scrollTop = 0;

        // Update nav buttons visibility after layout recalculation
        setTimeout(() => {
            if (window.updateNavButtonVisibility) window.updateNavButtonVisibility();
        }, 50);
    }

    async function fetchMarkdown(filename, targetSectionId = null) {
        try {
            const response = await fetch(`readings/${filename}`);
            if (!response.ok) throw new Error('File not found');
            const text = await response.text();

            // Split markdown by H1 or H2 headings
            const sectionsRaw = text.split(/^(?:#|##)\s+/m).filter(s => s.trim());

            currentFileSections = sectionsRaw.map((raw, index) => {
                const lines = raw.split('\n');
                const headerLine = lines[0].trim();
                const sectionMatch = headerLine.match(/^([0-9\.]+)\s/);
                let sectionId = sectionMatch ? sectionMatch[1] : null;

                let htmlStr;
                // If it's the very first chunk and it doesn't start with # (no sectionId)
                if (!sectionId && index === 0) {
                    sectionId = filename.replace('.md', '');
                    htmlStr = marked.parse(raw);
                } else if (!sectionId) {
                    sectionId = 'unknown-' + index;
                    htmlStr = marked.parse(raw);
                } else {
                    // Strip the first line (the heading) to avoid duplicating the readingTitle
                    lines.shift();
                    let contentText = lines.join('\n').trim();
                    htmlStr = marked.parse(contentText);
                }

                // Parse GitHub-style alerts post-render
                htmlStr = htmlStr.replace(/<blockquote>\s*<p>\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\](?:<br>|\n)?([\s\S]*?)<\/blockquote>/gi, (match, type, content) => {
                    type = type.toLowerCase();
                    const icons = { note: 'ℹ️', tip: '💡', important: '⚠️', warning: '⚠️', caution: '🛑' };
                    return `
                        <div class="markdown-alert markdown-alert-${type}">
                            <p class="markdown-alert-title">
                                <span class="icon">${icons[type]}</span> ${type.toUpperCase()}
                            </p>
                            <p>${content}
                        </div>
                    `;
                });

                return { id: sectionId, html: htmlStr };
            }).filter(s => s.id);

            let idx = 0;
            if (targetSectionId) {
                idx = currentFileSections.findIndex(s => s.id === targetSectionId);
                if (idx === -1) idx = 0;
            }

            window.renderActiveSubsection(idx);
        } catch (error) {
            markdownContainer.innerHTML = `<p>Error loading reading material: ${error.message}</p>`;
        }
    }

    function populateStudyPanel(sectionId) {
        currentSectionId = sectionId;
        const data = studyData[sectionId];
        if (!data) {
            overviewTitle.textContent = "Data not found";
            overviewList.innerHTML = "<li>No overview available for this section.</li>";
            tabReview.innerHTML = "<p>No questions available.</p>";
            tabFlashcards.innerHTML = "<p>No flashcards available.</p>";
            return;
        }

        overviewTitle.textContent = data.title;
        overviewList.innerHTML = data.overview.map(item => `<li>${item}</li>`).join('');

        if (data.questions.length > 0) {
            const items = data.questions.map((q, idx) => `
                <div class="carousel-item">
                    <div class="question-card" style="margin-bottom:0; display:flex; flex-direction:column;">
                        <p style="flex-shrink:0;">${q.q}</p>
                        <button class="btn-reveal" onclick="this.nextElementSibling.style.display='flex'; this.style.display='none';">Reveal Answer</button>
                        <div class="answer-text" style="display:none; flex-direction:column; padding-top:0; border-top:none; margin-top:0;">
                            <div style="padding-top:1rem; border-top:1px dashed var(--border-color); margin-bottom:1rem;">
                                <strong>Answer:</strong><br>${marked.parse(q.a)}
                            </div>
                            <div class="feedback-btns" style="display:flex; gap:0.5rem; flex-shrink:0;">
                                <button onclick="window.setQuestionStatus(this, ${idx}, 'correct')" style="flex:1; padding:0.5rem; background:#10b981; color:white; border:none; border-radius:4px; cursor:pointer; font-weight:600;">I knew it</button>
                                <button onclick="window.setQuestionStatus(this, ${idx}, 'wrong')" style="flex:1; padding:0.5rem; background:#ef4444; color:white; border:none; border-radius:4px; cursor:pointer; font-weight:600;">Need review</button>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');

            const indicators = data.questions.map((q, idx) => `
                <span class="q-ind" id="q-ind-${idx}" onclick="window.scrollToCarouselItem(this, ${idx})" style="display:inline-block; width:12px; height:12px; border-radius:50%; background-color:#4b5563; margin:0 4px; cursor:pointer; transition:all 0.2s; box-shadow: ${idx === 0 ? '0 0 0 2px var(--accent-color)' : 'none'};"></span>
            `).join('');

            tabReview.innerHTML = `
                <div class="carousel-wrapper">
                    ${data.questions.length > 1 ? `<button class="carousel-prev" onclick="scrollCarousel(this, -1)">◀</button>` : ''}
                    <div class="carousel-container" style="align-items:stretch;">
                        ${items}
                    </div>
                    ${data.questions.length > 1 ? `<button class="carousel-next" onclick="scrollCarousel(this, 1)">▶</button>` : ''}
                </div>
                <div class="carousel-indicators" style="text-align:center; padding-top:1rem; flex-shrink:0;">
                    ${indicators}
                </div>
            `;
        } else {
            tabReview.innerHTML = "<p>No questions available.</p>";
        }

        if (data.flashcards.length > 0) {
            const items = data.flashcards.map(f => `
                <div class="carousel-item">
                    <div class="flashcard">
                        <div class="flashcard-inner">
                            <div class="flashcard-front">
                                <p>${f.front}</p>
                                <span class="hint">Hover to flip</span>
                            </div>
                            <div class="flashcard-back">
                                <p><strong>${f.back}</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');

            tabFlashcards.innerHTML = `
                <div class="carousel-wrapper">
                    ${data.flashcards.length > 1 ? `<button class="carousel-prev" onclick="scrollCarousel(this, -1)">◀</button>` : ''}
                    <div class="carousel-container">
                        ${items}
                    </div>
                    ${data.flashcards.length > 1 ? `<button class="carousel-next" onclick="scrollCarousel(this, 1)">▶</button>` : ''}
                </div>
            `;
        } else {
            tabFlashcards.innerHTML = "<p>No flashcards available.</p>";
        }
    }

    // Start building
    buildSidebar();

    // 4. Scroll & Resize Logic for Sticky Buttons
    const readingContentScrollArea = document.querySelector('.reading-content');

    window.updateNavButtonVisibility = function () {
        const topBtn = document.querySelector('.section-nav.top');
        const bottomBtn = document.querySelector('.section-nav.bottom');
        if (!topBtn && !bottomBtn) return;

        // Check if content is short (no scroll needed)
        const isScrollable = readingContentScrollArea.scrollHeight > readingContentScrollArea.clientHeight + 5;

        if (!isScrollable) {
            if (topBtn) { topBtn.style.opacity = '1'; topBtn.style.pointerEvents = 'auto'; }
            if (bottomBtn) { bottomBtn.style.opacity = '1'; bottomBtn.style.pointerEvents = 'auto'; }
            return;
        }

        // Long content: Top button logic
        if (topBtn) {
            if (readingContentScrollArea.scrollTop < 50) {
                topBtn.style.opacity = '1';
                topBtn.style.pointerEvents = 'auto';
            } else {
                topBtn.style.opacity = '0';
                topBtn.style.pointerEvents = 'none';
            }
        }

        // Long content: Bottom button logic
        if (bottomBtn) {
            const distanceToBottom = readingContentScrollArea.scrollHeight - readingContentScrollArea.scrollTop - readingContentScrollArea.clientHeight;
            if (distanceToBottom < 50) {
                bottomBtn.style.opacity = '1';
                bottomBtn.style.pointerEvents = 'auto';
            } else {
                bottomBtn.style.opacity = '0';
                bottomBtn.style.pointerEvents = 'none';
            }
        }
    }

    readingContentScrollArea.addEventListener('scroll', () => {
        if (window.updateNavButtonVisibility) window.updateNavButtonVisibility();
    });

    window.addEventListener('resize', () => {
        if (window.updateNavButtonVisibility) window.updateNavButtonVisibility();
    });

    // --- MARKDOWN EDITING LOGIC (DEV ONLY) ---
    const btnEditMd = document.getElementById('btn-edit-md');
    let isEditingMd = false;

    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        btnEditMd.style.display = 'block';
    }

    btnEditMd.addEventListener('click', async () => {
        const file = markdownContainer.getAttribute('data-loaded');
        if (!file) {
            alert('Please select a reading first.');
            return;
        }

        if (!isEditingMd) {
            // Enter edit mode
            isEditingMd = true;
            btnEditMd.textContent = 'Save Markdown';
            btnEditMd.style.backgroundColor = '#10b981'; // Green

            try {
                // Fetch RAW content bypassing cache
                const response = await fetch(`readings/${file}?t=${Date.now()}`);
                if (!response.ok) throw new Error('Could not fetch raw markdown');
                const raw = await response.text();

                markdownContainer.innerHTML = `<textarea id="edit-md-textarea" class="edit-md-textarea"></textarea>`;
                document.getElementById('edit-md-textarea').value = raw;
                
                // Hide pagination buttons
                document.querySelectorAll('.section-nav').forEach(btn => btn.style.display = 'none');
            } catch(e) {
                alert('Error loading raw markdown: ' + e.message);
                isEditingMd = false;
                btnEditMd.textContent = 'Edit Raw Markdown';
                btnEditMd.style.backgroundColor = '';
            }
        } else {
            // Save mode
            const textarea = document.getElementById('edit-md-textarea');
            if (!textarea) return;
            
            const updatedContent = textarea.value;
            btnEditMd.textContent = 'Saving...';
            
            try {
                const saveRes = await fetch('/api/save-markdown', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ filename: file, content: updatedContent })
                });

                if (saveRes.ok) {
                    isEditingMd = false;
                    btnEditMd.textContent = 'Edit Raw Markdown';
                    btnEditMd.style.backgroundColor = '';
                    
                    // Track where we were before refresh
                    const activeLink = document.querySelector('.nav-link.current');
                    const activeSectionId = activeLink ? activeLink.getAttribute('data-section') : null;
                    
                    // Force cache refresh
                    markdownContainer.setAttribute('data-loaded', '');
                    
                    // Rebuild sidebar in case headers changed
                    sidebarNav.innerHTML = '';
                    await buildSidebar();
                    
                    if (activeSectionId) {
                        const newLink = document.querySelector(`.nav-link[data-file="${file}"][data-section="${activeSectionId}"]`);
                        if (newLink) newLink.click();
                        else fetchMarkdown(file); // fallback
                    } else {
                        fetchMarkdown(file);
                    }
                } else {
                    const err = await saveRes.json();
                    alert('Failed to save! ' + (err.error || ''));
                    btnEditMd.textContent = 'Save Markdown';
                }
            } catch (e) {
                alert('Error saving: ' + e.message);
                btnEditMd.textContent = 'Save Markdown';
            }
        }
    });

    // --- MOBILE SIDEBAR TOGGLES ---
    const btnToggleNav = document.getElementById('btn-toggle-nav');
    const btnToggleStudy = document.getElementById('btn-toggle-study');
    const sidebarNavElement = document.getElementById('sidebar-nav');
    const studyPanelElement = document.getElementById('study-panel');
    const mobileOverlay = document.getElementById('mobile-overlay');

    function closeAllSidebars() {
        sidebarNavElement.classList.remove('open');
        studyPanelElement.classList.remove('open');
        mobileOverlay.classList.remove('active');
    }

    if (btnToggleNav) {
        btnToggleNav.addEventListener('click', () => {
            const isOpen = sidebarNavElement.classList.contains('open');
            closeAllSidebars();
            if (!isOpen) {
                sidebarNavElement.classList.add('open');
                mobileOverlay.classList.add('active');
            }
        });
    }

    if (btnToggleStudy) {
        btnToggleStudy.addEventListener('click', () => {
            const isOpen = studyPanelElement.classList.contains('open');
            closeAllSidebars();
            if (!isOpen) {
                studyPanelElement.classList.add('open');
                mobileOverlay.classList.add('active');
            }
        });
    }

    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', closeAllSidebars);
    }
    
    // Auto-close sidebars when a nav link is clicked on mobile
    sidebarNav.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-link') && window.innerWidth <= 1100) {
            closeAllSidebars();
        }
    });

});
