const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.md': 'text/markdown',
    '.png': 'image/png',
    '.jpg': 'image/jpeg'
};

const server = http.createServer((req, res) => {
    // Handle the Save API endpoint
    if (req.method === 'POST' && req.url === '/api/save') {
        let body = '';
        req.on('data', chunk => body += chunk.toString());
        req.on('end', () => {
            try {
                const data = JSON.parse(body);
                // Convert back to data.js format, maintaining the const declaration
                const fileContent = `const studyData = ${JSON.stringify(data, null, 4)};`;
                fs.writeFileSync(path.join(__dirname, 'data.js'), fileContent, 'utf8');
                
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true }));
            } catch (e) {
                res.writeHead(500);
                res.end(JSON.stringify({ error: e.message }));
            }
        });
        return;
    }
    
    // Handle the Save Markdown endpoint
    if (req.method === 'POST' && req.url === '/api/save-markdown') {
        let body = '';
        req.on('data', chunk => body += chunk.toString());
        req.on('end', () => {
            try {
                const data = JSON.parse(body);
                if (!data.filename || !data.filename.endsWith('.md')) throw new Error("Invalid filename");
                const safePath = path.join(__dirname, 'readings', path.basename(data.filename));
                fs.writeFileSync(safePath, data.content, 'utf8');
                
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true }));
            } catch (e) {
                res.writeHead(500);
                res.end(JSON.stringify({ error: e.message }));
            }
        });
        return;
    }

    // Serve static files (like npx serve)
    let parsedUrl = req.url.split('?')[0]; // Strip query parameters
    let decodedUrl = decodeURIComponent(parsedUrl); // Handle spaces (%20)
    let filePath = path.join(__dirname, decodedUrl === '/' ? 'index.html' : decodedUrl);
    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = MIME_TYPES[extname] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                res.writeHead(404);
                res.end('File not found');
            } else {
                res.writeHead(500);
                res.end('Server error: ' + err.code);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`\n=================================================`);
    console.log(`🚀 Development Server Running at: http://localhost:${PORT}`);
    console.log(`✏️  EDIT MODE ENABLED: Saving to data.js active.`);
    console.log(`=================================================\n`);
});
