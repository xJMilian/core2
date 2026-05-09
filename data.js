const studyData = {
    "11.1.1": {
        "title": "11.1.1 Standard Operating Procedure",
        "overview": [
            "Policies are overall statements of intent. (\"Laws\")",
            "SOPs are step-by-step instructions for tasks to comply with policy.",
            "Guidelines are for complex areas without rigid procedures."
        ],
        "questions": [
            {
                "q": "What is an SOP?",
                "a": "Standard Operating Procedure: Documentation of best practices and work instructions for administrative tasks."
            }
        ],
        "flashcards": [
            {
                "front": "SOP",
                "back": "Standard Operating Procedure"
            },
            {
                "front": "Policy",
                "back": "An overall statement of intent by an organization"
            }
        ]
    },
    "11.1.2": {
        "title": "11.1.2 Service Level Agreements",
        "overview": [
            "SLAs define expected service levels and performance.",
            "Can exist internally (between departments) or externally (vendors/ISPs).",
            "SLAs include uptime, availability, and support expectations.",
            "Rule of Nines measures service availability/downtime.",
            "4 Nines = 99.99% uptime (~52 min downtime/year).",
            "More Nines = less allowed downtime.",
            "SLAs can also measure storage durability.",
            "11 Nines durability = extremely low data loss risk.",
            "SLA includes complaint/escalation procedures.",
            "SLA may include compensation if service targets are missed.",
            "Metrics and responsibilities are clearly documented.",
            "Common with cloud providers, ISPs, and IT services."
        ],
        "questions": [
            {
                "q": "What metric is often used to measure expected up-time in an SLA?",
                "a": "The Rule of Nines (e.g., 99.99%)."
            }
        ],
        "flashcards": [
            {
                "front": "SLA",
                "back": "Service Level Agreement"
            }
        ]
    },
    "11.1.3": {
        "title": "11.1.3 Incident and Ticketing Systems",
        "overview": [
            "Ticketing systems manage incidents, requests, and problems.",
            "Used for internal employees and external customers.",
            "Each support request gets a unique ticket ID.",
            "Tickets are assigned to a support agent/technician.",
            "Tickets store user details (name, contact info, department).",
            "Tickets may link to CRM or employee databases.",
            "Device details may be included (asset ID/service tag).",
            "User describes the issue/problem.",
            "Technician asks clarifying questions if needed.",
            "Tickets are categorized by issue type.",
            "Agent determines severity and urgency.",
            "Estimated resolution time may be assigned.",
            "Initial troubleshooting is usually attempted first.",
            "Unresolved issues may be escalated to senior support/deskside support."
        ],
        "questions": [
            {
                "q": "What two pieces of information are critical when generating a new job ticket?",
                "a": "User information and Device information."
            }
        ],
        "flashcards": [
            {
                "front": "CRM",
                "back": "Customer Relationship Management"
            }
        ]
    },
    "11.1.4": {
        "title": "11.1.4 Categories and Severity",
        "overview": [
            "Requests: provisioning things that have an SOP.",
            "Incidents: unexpected errors faced by users.",
            "Problems: underlying causes of multiple incidents.",
            "Severity levels: Critical, Major, Minor."
        ],
        "questions": [
            {
                "q": "What is the difference between an incident and a problem?",
                "a": "An incident is a single unexpected error, while a problem is the root cause of multiple related incidents."
            }
        ],
        "flashcards": [
            {
                "front": "Critical Incident",
                "back": "Widespread effect on customers or data breach"
            }
        ]
    },
    "11.1.5": {
        "title": "11.1.5 Ticket Management",
        "overview": [
            "Tickets go through escalation levels when unresolved.",
            "Tier 0: Self-service / Knowledge base.",
            "Tier 1: Initial diagnosis.",
            "Tier 2: Escalation to senior techs.",
            "Tier 3: Escalation to engineers/managers."
        ],
        "questions": [
            {
                "q": "What defines Tier 0 support?",
                "a": "Self-service options like FAQs, knowledge bases, or help bots."
            }
        ],
        "flashcards": [
            {
                "front": "Tier 1",
                "back": "Initial diagnosis and basic troubleshooting"
            }
        ]
    },
    "11.1.7": {
        "title": "11.1.7 Support Documentation",
        "overview": [
            "Linking inventory records to support documentation helps tracking.",
            "Cross-referencing ticketing systems allows analysis of asset failure rates.",
            "Knowledge bases hold FAQs and common fixes."
        ],
        "questions": [
            {
                "q": "Why is it beneficial to link a ticketing system with device inventory?",
                "a": "To track previous issues with the same asset and analyze failure statistics."
            }
        ],
        "flashcards": [
            {
                "front": "Knowledge Base",
                "back": "Searchable database of FAQs and troubleshooting articles"
            }
        ]
    },
    "11.1.8": {
        "title": "11.1.8 Lessons Learned",
        "overview": [
            "Created after major/critical incidents.",
            "Also known as After-Action Report (AAR).",
            "Purpose is to identify root causes and recommend preventive measures."
        ],
        "questions": [
            {
                "q": "What is the primary goal of an After-Action Report?",
                "a": "To identify underlying causes and recommend preventive measures to avoid a repeat."
            }
        ],
        "flashcards": [
            {
                "front": "AAR",
                "back": "After-Action Report (Lessons Learned)"
            }
        ]
    },
    "11.1.9": {
        "title": "11.1.9 Written Communication",
        "overview": [
            "Clear, concise communication is crucial in tickets.",
            "Issue description: Initial user request.",
            "Progress notes: Discovery and diagnosis steps.",
            "Problem resolution: The action taken to fix it."
        ],
        "questions": [
            {
                "q": "What does concise communication mean?",
                "a": "Using as few words as possible while stating all necessary facts."
            }
        ],
        "flashcards": [
            {
                "front": "Progress Notes",
                "back": "Ticket field for diagnostic discoveries"
            }
        ]
    },
    "11.1.10": {
        "title": "11.1.10 Knowledge Base",
        "overview": [
            "Self-serve central repository for info and FAQs.",
            "Can include checklists, past fixes, and OEM resources.",
            "Reduces repetitive support calls."
        ],
        "questions": [
            {
                "q": "Where can you find official Windows FAQs and documentation?",
                "a": "Microsoft Learn / support.microsoft.com"
            }
        ],
        "flashcards": [
            {
                "front": "FAQ",
                "back": "Frequently Asked Questions"
            }
        ]
    },
    "11.1.12": {
        "title": "11.1.12 Policy Documentation",
        "overview": [
            "AUP sets rules for acceptable use of company resources.",
            "Prevents misuse of equipment (fraud, defamation, hacking).",
            "Often includes regulatory compliance splash screens."
        ],
        "questions": [
            {
                "q": "What does AUP stand for?",
                "a": "Acceptable Use Policy"
            }
        ],
        "flashcards": [
            {
                "front": "AUP",
                "back": "Acceptable Use Policy"
            }
        ]
    },
    "11.2.1": {
        "title": "11.2.1 Professional Support Processes",
        "overview": [
            "Acknowledge requests and set clear timelines.",
            "Meet expectations or communicate delays honestly.",
            "Offer clear instructions for repair/RMA or replacement.",
            "Follow up to ensure customer satisfaction."
        ],
        "questions": [
            {
                "q": "What should you do if you cannot meet an expected timeline?",
                "a": "Be honest, empathize, and identify a positive action to resolve it. Don't make excuses."
            }
        ],
        "flashcards": [
            {
                "front": "RMA",
                "back": "Returned-Merchandise Authorization"
            }
        ]
    },
    "11.2.2": {
        "title": "11.2.2 Professional Support Delivery",
        "overview": [
            "Be on time for appointments.",
            "Avoid distractions: no personal calls, social media, or games.",
            "Respect privacy: Do not open private files or browse customer data."
        ],
        "questions": [
            {
                "q": "What should you ask a customer to do before working on their PC?",
                "a": "Ask them to close any confidential files or logged-in accounts."
            }
        ],
        "flashcards": [
            {
                "front": "Distraction",
                "back": "Interrupts task resolution (e.g., texting, browsing)"
            }
        ]
    },
    "11.2.3": {
        "title": "11.2.3 Professional Appearance",
        "overview": [
            "Business casual is typical for field support.",
            "Use clear language without technical jargon.",
            "Be culturally sensitive regarding greetings and personal space."
        ],
        "questions": [
            {
                "q": "Why should you avoid technical jargon?",
                "a": "Customers may not understand it, which can cause confusion and frustration."
            }
        ],
        "flashcards": [
            {
                "front": "Business Casual",
                "back": "Smart workwear, avoiding jeans or T-shirts"
            }
        ]
    },
    "11.2.4": {
        "title": "11.2.4 Professional Communications",
        "overview": [
            "Active listening requires full attention without interrupting.",
            "Restate and summarize customer statements to ensure understanding.",
            "Take notes to maintain accurate records."
        ],
        "questions": [
            {
                "q": "What is active listening?",
                "a": "Listening with full attention, without interrupting or planning your next reply."
            }
        ],
        "flashcards": [
            {
                "front": "Active Listening",
                "back": "Focused listening, restating, and summarizing"
            }
        ]
    },
    "11.2.5": {
        "title": "11.2.5 Clarifying Techniques",
        "overview": [
            "Open-ended questions: Invite detailed responses.",
            "Closed questions: Require Yes/No or specific facts.",
            "Start open, then narrow down with closed questions."
        ],
        "questions": [
            {
                "q": "Give an example of an open-ended question.",
                "a": "'What seems to be the problem?' or 'What happened right before it crashed?'"
            }
        ],
        "flashcards": [
            {
                "front": "Closed Question",
                "back": "Requires Yes/No or specific fixed answer"
            }
        ]
    },
    "11.2.6": {
        "title": "11.2.6 Difficult Situations",
        "overview": [
            "Maintain a positive attitude and empathy.",
            "Do not argue or deny the problem's existence.",
            "Do not be judgmental of the user's technical skills."
        ],
        "questions": [
            {
                "q": "Should you admit fault immediately if the user complains?",
                "a": "You don't have to agree, but you should empathize and focus on a resolution."
            }
        ],
        "flashcards": [
            {
                "front": "Empathy",
                "back": "Understanding the customer's frustration"
            }
        ]
    },
    "11.2.7": {
        "title": "11.2.7 Difficult Customers",
        "overview": [
            "Identify early signs of anger (raised voice, rapid speech).",
            "Do not take complaints personally.",
            "If abuse continues despite warnings, hang up or escalate."
        ],
        "questions": [
            {
                "q": "What is the final option if a customer remains highly abusive?",
                "a": "Issue a warning, and if it continues, end the call or escalate to management."
            }
        ],
        "flashcards": [
            {
                "front": "Abusive Customer",
                "back": "Warn, document, and escalate/hang up if necessary"
            }
        ]
    },
    "11.2.8": {
        "title": "11.2.8 Social Media Rules",
        "overview": [
            "Never post customer or incident experiences on social media.",
            "Venting should be done privately in-person.",
            "Public posts can damage reputations and have legal consequences."
        ],
        "questions": [
            {
                "q": "Is it okay to post a funny customer story on Twitter if you leave out their name?",
                "a": "No. You should exercise full discretion and never post work incidents on social media."
            }
        ],
        "flashcards": [
            {
                "front": "Social Media",
                "back": "Never use to discuss work incidents or customers"
            }
        ]
    },
    "11.3.1": {
        "title": "11.3.1 Windows and macOS",
        "overview": [
            "Windows serves home, business, and server markets.",
            "macOS is exclusive to Apple hardware, derived from UNIX.",
            "macOS updates are free and hardware compatibility varies."
        ],
        "questions": [
            {
                "q": "Can you install macOS on a custom-built PC?",
                "a": "No, it is exclusively licensed for Apple hardware."
            }
        ],
        "flashcards": [
            {
                "front": "Windows Server",
                "back": "Network Operating System (NOS)"
            }
        ]
    },
    "11.3.2": {
        "title": "11.3.2 UNIX, Linux, Chrome OS",
        "overview": [
            "UNIX: Highly portable, kernel/shell architecture.",
            "Linux: Open-source UNIX derivative (Ubuntu, RHEL).",
            "Chrome OS: Google's browser-centric OS for budget hardware."
        ],
        "questions": [
            {
                "q": "What makes Chrome OS unique compared to Windows?",
                "a": "It relies primarily on server-hosted web applications rather than local software."
            }
        ],
        "flashcards": [
            {
                "front": "Distro",
                "back": "Linux Distribution (e.g., Ubuntu, Fedora)"
            }
        ]
    },
    "11.3.3": {
        "title": "11.3.3 iOS and Android",
        "overview": [
            "iOS: Closed-source, Apple mobile devices only.",
            "Android: Open-source Linux-based OS driven by Google.",
            "Android fragmentation happens because manufacturers control updates."
        ],
        "questions": [
            {
                "q": "Why do Android devices suffer from fragmentation?",
                "a": "Because different manufacturers decide when and if to push Google's updates."
            }
        ],
        "flashcards": [
            {
                "front": "iOS",
                "back": "Closed-source mobile OS by Apple"
            }
        ]
    },
    "11.3.4": {
        "title": "11.3.4 Windows FS Types",
        "overview": [
            "NTFS: Journaling, permissions, encryption, >137GB.",
            "ReFS: Resilient, self-healing, massive scale.",
            "FAT32: Max 4GB file size, used for removables.",
            "exFAT: 64-bit FAT for large flash drives."
        ],
        "questions": [
            {
                "q": "What is the maximum file size on FAT32?",
                "a": "4 GB minus 1 byte."
            }
        ],
        "flashcards": [
            {
                "front": "NTFS",
                "back": "New Technology File System"
            },
            {
                "front": "ReFS",
                "back": "Resilient File System"
            }
        ]
    },
    "11.3.5": {
        "title": "11.3.5 Linux and macOS FS Types",
        "overview": [
            "Linux commonly uses ext3, ext4, or XFS.",
            "ext4 supports journaling and high performance.",
            "macOS uses APFS (Apple File System)."
        ],
        "questions": [
            {
                "q": "What is the modern default file system for Apple computers?",
                "a": "APFS (Apple File System)"
            }
        ],
        "flashcards": [
            {
                "front": "APFS",
                "back": "Apple File System"
            },
            {
                "front": "ext4",
                "back": "Common Linux file system"
            }
        ]
    },
    "11.3.6": {
        "title": "11.3.6 OS Compatibility",
        "overview": [
            "Windows 11 requires TPM 2.0.",
            "Software compiled for one OS won't run natively on another.",
            "Web apps mitigate some compatibility issues."
        ],
        "questions": [
            {
                "q": "What specific hardware chip is required to upgrade to Windows 11?",
                "a": "TPM (Trusted Platform Module) version 2.0."
            }
        ],
        "flashcards": [
            {
                "front": "TPM",
                "back": "Trusted Platform Module"
            }
        ]
    },
    "11.3.7": {
        "title": "11.3.7 Vendor Life-cycle",
        "overview": [
            "Beta phase: Testing.",
            "Supported phase: Active updates.",
            "Extended support: Critical patches only.",
            "End-of-life (EOL): No patches, severe security risk."
        ],
        "questions": [
            {
                "q": "What happens when an OS reaches End-of-Life (EOL)?",
                "a": "It stops receiving security updates and becomes a vulnerability."
            }
        ],
        "flashcards": [
            {
                "front": "EOL",
                "back": "End-of-Life"
            }
        ]
    },
    "12.0": {
        "title": "12.0 Configuring Windows",
        "overview": [
            "Operating systems provide the user interface to hardware and network.",
            "As an IT tech, you will install, configure, maintain, and troubleshoot OSs.",
            "Understanding OS basics is crucial for effective system support."
        ],
        "questions": [
            {
                "q": "What is the primary function of an operating system?",
                "a": "To provide a user interface to the computer hardware and run software applications."
            }
        ],
        "flashcards": [
            {
                "front": "OS",
                "back": "Operating System"
            }
        ]
    },
    "12.1.1": {
        "title": "12.1.1 Windows Interfaces",
        "overview": [
            "OS consists of kernel, device drivers, and user interface programs.",
            "Windows 10 uses a touch-optimized Start menu.",
            "Windows 11 introduces a center-aligned taskbar and multiple desktops."
        ],
        "questions": [
            {
                "q": "What does the notification area contain?",
                "a": "Icons for background processes."
            },
            {
                "q": "What is the benefit of multiple desktops in Windows 11?",
                "a": "Allows separate workspaces for business apps and personal apps/games."
            }
        ],
        "flashcards": [
            {
                "front": "Kernel",
                "back": "Core component of OS interfacing with hardware"
            },
            {
                "front": "GUI",
                "back": "Graphical User Interface"
            }
        ]
    },
    "12.1.2": {
        "title": "12.1.2 Settings & Control Panel",
        "overview": [
            "Settings app is the preferred modern touch-enabled interface.",
            "Control Panel is the legacy interface for advanced/older applets.",
            "All configuration data is ultimately stored in the Registry."
        ],
        "questions": [
            {
                "q": "Where is all Windows configuration data ultimately held?",
                "a": "The Registry."
            },
            {
                "q": "Which legacy interface still holds some advanced system configurations?",
                "a": "Control Panel."
            }
        ],
        "flashcards": [
            {
                "front": "Registry",
                "back": "Database holding all Windows configuration data"
            }
        ]
    },
    "12.1.4": {
        "title": "12.1.4 Accounts Settings",
        "overview": [
            "A user account controls access and can have varying privileges.",
            "Local accounts are for a single PC; Microsoft accounts sync to the cloud.",
            "UAC prevents unauthorized use of administrator privileges."
        ],
        "questions": [
            {
                "q": "What is the difference between a local account and a Microsoft account?",
                "a": "Local is single-PC only; Microsoft accounts sync desktop settings and profile data across devices."
            },
            {
                "q": "What is the purpose of UAC?",
                "a": "User Account Control prevents unauthorized administrative changes."
            }
        ],
        "flashcards": [
            {
                "front": "Standard User",
                "back": "Has privileges on their profile only, not whole PC"
            },
            {
                "front": "UAC",
                "back": "User Account Control"
            }
        ]
    },
    "12.1.6": {
        "title": "12.1.6 Privacy Settings",
        "overview": [
            "Controls what usage telemetry Microsoft can collect.",
            "Manages app permissions for Location, Camera, Microphone.",
            "Allows users to restrict access to contacts and files."
        ],
        "questions": [
            {
                "q": "What does data collection in Privacy Settings affect?",
                "a": "Speech/input personalization, diagnostics, and activity history."
            }
        ],
        "flashcards": [
            {
                "front": "Telemetry",
                "back": "Usage data collected by Microsoft for diagnostics"
            }
        ]
    },
    "12.1.7": {
        "title": "12.1.7 Desktop Settings",
        "overview": [
            "Time & Language settings sync clocks and configure regions/languages.",
            "Personalization customizes themes, wallpapers, and color schemes."
        ],
        "questions": [
            {
                "q": "Why is an accurate system time important?",
                "a": "Crucial for processes like authentication and backup."
            }
        ],
        "flashcards": [
            {
                "front": "Personalization",
                "back": "Menu to change themes, wallpapers, colors"
            }
        ]
    },
    "12.1.9": {
        "title": "12.1.9 Ease of Access Settings",
        "overview": [
            "Vision configures magnifier, high-contrast, and Narrator.",
            "Hearing configures mono sound, captions, and visual notifications.",
            "Interaction configures speech/eye control and keyboard usability."
        ],
        "questions": [
            {
                "q": "What is the Narrator tool used for?",
                "a": "To enable audio descriptions of the current screen selection."
            }
        ],
        "flashcards": [
            {
                "front": "Accessibility",
                "back": "Windows 11 name for Ease of Access"
            }
        ]
    },
    "12.1.10": {
        "title": "12.1.10 File Explorer",
        "overview": [
            "Used to manage files (copy, move, delete).",
            "C:\\ is the root directory. Users folder holds profiles.",
            "Windows and Program Files hold OS and application data."
        ],
        "questions": [
            {
                "q": "Where are 32-bit applications typically stored in 64-bit Windows?",
                "a": "Program Files (x86)"
            }
        ],
        "flashcards": [
            {
                "front": "Root Directory",
                "back": "Represented by backslash (\\)"
            }
        ]
    },
    "12.1.11": {
        "title": "12.1.11 File Explorer Options",
        "overview": [
            "View tab allows showing/hiding file extensions.",
            "Can reveal hidden files and folders.",
            "Hide protected OS files is enabled by default to prevent accidental deletion."
        ],
        "questions": [
            {
                "q": "Why are file extensions normally hidden?",
                "a": "To prevent users from accidentally changing them when renaming files, which breaks application association."
            }
        ],
        "flashcards": [
            {
                "front": "File Extension",
                "back": "3 or 4 characters after period associating file with app"
            }
        ]
    },
    "12.1.12": {
        "title": "12.1.12 Indexing Options",
        "overview": [
            "Defines indexed locations to speed up searching.",
            "A corrupted index is a common cause of search problems.",
            "You can rebuild the index from the Advanced Options."
        ],
        "questions": [
            {
                "q": "What should you do if Windows Search stops working properly?",
                "a": "Rebuild the search index from the Indexing Options applet."
            }
        ],
        "flashcards": [
            {
                "front": "Rebuild Index",
                "back": "Troubleshooting step for search issues"
            }
        ]
    },
    "12.2.1": {
        "title": "12.2.1 Corporate Email",
        "overview": [
            "IMAP syncs across multiple devices.",
            "POP3 typically downloads to a single device.",
            "SMTP is strictly for sending mail."
        ],
        "questions": [
            {
                "q": "Which protocol is best for syncing across laptop, smartphone, and tablet?",
                "a": "IMAP"
            }
        ],
        "flashcards": [
            {
                "front": "IMAP",
                "back": "Port 143 / 993 (Secure)"
            },
            {
                "front": "SMTP",
                "back": "Port 25 / 587 (Secure)"
            }
        ]
    },
    "12.2.2": {
        "title": "12.2.2 Mobile Configuration",
        "overview": [
            "Requires correct port numbers and SSL/TLS settings.",
            "Corporate setups might require Exchange ActiveSync."
        ],
        "questions": [
            {
                "q": "What encryption standards are used for secure email ports?",
                "a": "SSL/TLS"
            }
        ],
        "flashcards": [
            {
                "front": "POP3 Secure",
                "back": "Port 995"
            }
        ]
    },
    "12.3.1": {
        "title": "12.3.1 System Requirements",
        "overview": [
            "32-bit apps can run on 64-bit OS, but 64-bit apps need a 64-bit OS/CPU.",
            "Storage requirements must include space for generated data.",
            "Dedicated graphics cards with VRAM are needed for demanding apps."
        ],
        "questions": [
            {
                "q": "Can a 64-bit application be installed on a 32-bit OS?",
                "a": "No, it requires a 64-bit CPU and OS platform."
            },
            {
                "q": "What is an external hardware token used for?",
                "a": "Secure authentication using a smart card or USB token."
            }
        ],
        "flashcards": [
            {
                "front": "VRAM",
                "back": "Video RAM on a dedicated graphics card"
            },
            {
                "front": "Integrated Graphics",
                "back": "GPU built into CPU or motherboard"
            }
        ]
    },
    "12.3.2": {
        "title": "12.3.2 OS Requirements",
        "overview": [
            "Applications must be compatible with the specific OS.",
            "WOW64 environment allows 32-bit apps to run on 64-bit Windows."
        ],
        "questions": [
            {
                "q": "What is WOW64?",
                "a": "Windows on Windows 64-bit: an environment that allows 32-bit apps to run in 64-bit Windows."
            },
            {
                "q": "Where are 32-bit shared system files stored in 64-bit Windows?",
                "a": "%SystemRoot%\\syswow64"
            }
        ],
        "flashcards": [
            {
                "front": "WOW64",
                "back": "Windows on Windows 64-bit subsystem"
            }
        ]
    },
    "12.3.3": {
        "title": "12.3.3 Distribution Methods",
        "overview": [
            "Setup files pack executables and configuration (.EXE, .MSI, .PKG).",
            "Enterprise networks use image deployment or network pushes.",
            "ISO files act as mountable virtual optical discs."
        ],
        "questions": [
            {
                "q": "How can you verify a downloaded Linux package?",
                "a": "By generating a hash and comparing it to the publisher's published hash value."
            }
        ],
        "flashcards": [
            {
                "front": "ISO",
                "back": "Image file containing contents of an optical disc"
            }
        ]
    },
    "12.3.4": {
        "title": "12.3.4 Other Considerations",
        "overview": [
            "Licensing limits devices or users; violations incur penalties.",
            "Network pushes should happen off-hours to prevent congestion.",
            "GPOs allow silent app deployment without local admin rights.",
            "Beware of Trojan Horses and thoroughly test apps in a lab."
        ],
        "questions": [
            {
                "q": "What is a benefit of deploying via GPO?",
                "a": "Users do not need local admin privileges to install the software."
            }
        ],
        "flashcards": [
            {
                "front": "Shadow IT",
                "back": "Unsanctioned software and devices on the network"
            },
            {
                "front": "Trojan Horse",
                "back": "Malware whose true malicious purpose is concealed"
            }
        ]
    },
    "12.4.1": {
        "title": "12.4.1 Email Systems",
        "overview": [
            "Online email is accessed and managed through browsers.",
            "Examples: Microsoft 365 Outlook Web, Google Workspace.",
            "Allows synchronization and collaboration from any device."
        ],
        "questions": [
            {
                "q": "What is a primary benefit of a cloud-based email solution?",
                "a": "Automatic synchronization across many devices and global access."
            }
        ],
        "flashcards": [
            {
                "front": "SaaS",
                "back": "Software as a Service (e.g., Google Workspace)"
            }
        ]
    },
    "12.4.2": {
        "title": "12.4.2 Storage",
        "overview": [
            "Services like iCloud, OneDrive, Google Drive.",
            "You can pause syncing if on a metered connection to save bandwidth."
        ],
        "questions": [
            {
                "q": "Why might you pause cloud synchronization?",
                "a": "To save data costs when on a metered connection."
            }
        ],
        "flashcards": [
            {
                "front": "Metered Connection",
                "back": "Network connection with data limits or extra costs"
            }
        ]
    },
    "12.4.3": {
        "title": "12.4.3 Collaboration Tools",
        "overview": [
            "Allows simultaneous editing (Docs, Slides) and tracking of user edits.",
            "Videoconferencing (Teams, Zoom, Slack) supports remote work.",
            "Apps may need permissions for local mics/cameras."
        ],
        "questions": [
            {
                "q": "What feature do cloud document editors provide for team projects?",
                "a": "Simultaneous real-time editing and tracking of individual users' edits."
            }
        ],
        "flashcards": [
            {
                "front": "Collaboration Tool",
                "back": "Software that allows users to work together remotely"
            }
        ]
    },
    "12.4.4": {
        "title": "12.4.4 User Licensing",
        "overview": [
            "Violating license limits can cause legal issues.",
            "Cloud licensing includes assigning per-user seats (e.g. Entra Admin Center)."
        ],
        "questions": [
            {
                "q": "Where can cloud app licenses be managed in a Microsoft environment?",
                "a": "Microsoft Entra Admin Center."
            }
        ],
        "flashcards": [
            {
                "front": "Licensing",
                "back": "Terms and conditions of software usage"
            }
        ]
    },
    "12.4.5": {
        "title": "12.4.5 Identity Sync",
        "overview": [
            "Single Sign-On (SSO) simplifies access to cloud and on-premise tools.",
            "Reduces management burden and credential fatigue.",
            "Example: Microsoft Entra Connect."
        ],
        "questions": [
            {
                "q": "What is a major advantage of identity synchronization?",
                "a": "Having a single set of credentials to access cloud and on-premise resources."
            }
        ],
        "flashcards": [
            {
                "front": "SSO",
                "back": "Single Sign-On"
            },
            {
                "front": "Entra Connect",
                "back": "Tool to sync on-premise AD with Azure/Entra ID"
            }
        ]
    },
    "11.1": {
        "overview": [
            "SOPs",
            "SLAs",
            "Ticketing Systems",
            "Ticket Categories and Severity Levels",
            "Managing Tickets",
            "Knowledge Base",
            "Lessons Learned",
            "Clear Communication"
        ],
        "questions": [],
        "flashcards": []
    },
    "13.1.1": {
        "overview": [
            "Device Manager (devmgmt.msc): view/edit installed hardware properties, settings and drivers.",
            "Windows attempts to identify device types and functions but if it fails to find a driver, results in Unknown or Generic device.",
            "If device never works check compatibility and drivers with OS.",
            "Manufacturers often provide drivers and updates on their websites, which might need to be installed manually.",
            "Driver updates may also be available through Windows Update as optional updates.",
            "Plug and Play, hot-swappable devices, you can remove them without uninstalling.",
            "For storage devices, close active applications, and safely remove hardware through the taskbar.",
            "Physically removing a device keeps it's drivers installed for future use.",
            "Disabling devices - if it's malfunctioning, restrict access, and if it's hard to physically uninstall (enhance security)."
        ],
        "questions": [],
        "flashcards": []
    },
    "13.1.2": {
        "overview": [
            "Disk management - summarizes all fixed and removable disks (HDDs, SSDs, Optical Drives)",
            "HDD and SDDs can be divided into logical partitions called volumes.",
            "Typically Disk 0 holds the OS with 3 volumes: System, Boot and Recovery",
            "System - boot files (not assigned a drive letter)",
            "Boot - OS files, typically C: letter",
            "Recovery - tools for repair/factory reset. Uses PC vendor tools or Microsoft WinRE (not assigned a drive letter)",
            "Disk Management tasks: Initializing, Partitioning, and Formatting.",
            "Initializing - unformatted disks must be initialized using MBR or GPT.",
            "Partitioning - each disk must have at least one partition",
            "Formatting - writes a file system, typically NTFS, allows OS to read and write files.",
            "Repartitioning - expand existing partitions with unpartitioned space."
        ],
        "questions": [],
        "flashcards": []
    },
    "13.1.3": {
        "overview": [
            "Disk drives require the most attention to keep it in optimum working condition",
            "File storage are subject to: fragmentation, capacity, and damage.",
            "Fragmentation - ideally files should occupy contiguous clusters. Over time they become scattered reducing read performance.",
            "Capacity - performance suffers if boot volume has less than 20% free space, a low disk space warning shows under 200MB",
            "Damage - HDDs are prone to physical damage, leading to corrupted files. SSDs degrade resulting in bad blocks and are sensitive to impacts, heat and electrical issues.",
            "Regular disk maintenance at least monthly and before software installs address these problems.",
            "HDD = defragment; SSD = trim",
            "Windows task scheduler automatically runs disk optimizer."
        ],
        "questions": [],
        "flashcards": []
    },
    "13.1.6": {
        "overview": [
            "Used to manage local users and groups",
            "net user UserName [Password] /[add/remove]",
            "net localgroup UserName  /[add/remove]"
        ],
        "questions": [],
        "flashcards": []
    },
    "13.1.8": {
        "overview": [
            "Verifies users, computers an services",
            "validity guaranteed by issuing certification authority.",
            "Key subfolders: personal, trusted root CAs, and third-party root CAs.",
            "Personal - stores user account certs for network auth, data encryption, and digital signatures",
            "trusted root CAs - certs from all trusted issues, mostly managed via Windows Update.",
            "third-party root CAs - trusted issuers from non-Microsoft and local enterprise providers.",
            "certmgr.msc for current user",
            "certlm.msc for computer",
            "Unsafe CAs increase security vulnerabilities by masquerading as legitimate services. Use cert manager to remove compromised certs when necessary."
        ],
        "questions": [],
        "flashcards": []
    },
    "13.1.10": {
        "overview": [
            "Registry is database for storing OS, device and application configurations",
            "Local_Machine (LM), Users (U), Current_User(CU), Classes_Root (CR), and Current_Config (CC)",
            "registry database stored in binary files (hives), consist of main file, .LOG file (transaction log), and .SAV (setup copy).",
            "system hive also has .ALT (backup file).",
            "Most files in C:\\Windows\\System32\\Config",
            "User provile hive (NTUSER.DAT) is in users profile folder.",
            "root keys -> subkeys -> data items (value entries)",
            "value entries: name, data type (string/binary), and a value",
            "registry portions can be exported and merged into another by double clicking or calling from script"
        ],
        "questions": [],
        "flashcards": []
    }
};