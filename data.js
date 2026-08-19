/**
 * PORTFOLIO DATA LAYER
 * ---------------------------------------------------------
 * Every value here is sourced directly from Raymond John
 * Managuit's CV. Nothing below is invented — to update the
 * site, edit this file only. The UI in app.js simply reads
 * from window.PORTFOLIO_DATA.
 * ---------------------------------------------------------
 */
window.PORTFOLIO_DATA = {

  profile: {
    name: "Raymond John Managuit",
    initials: "RM",
    title: "IT Technical Support Professional",
    subtitle: "Web Development & Data Validation",
    location: "Muntinlupa City, Philippines",
    email: "rjmanaguit00@gmail.com",
    phone: "0994 886 0249",
    photo: "assets/profile-photo-white.jpg",
    experienceYears: "3+",
    status: "Open to new opportunities",
    summary:
      "I'm an IT professional with three-plus years across technical support, IT operations, and data validation. My day-to-day covers hardware and software troubleshooting, Windows administration, network support, IT asset management, and technical documentation — with a growing focus on web development and data quality assurance. I care about reliable systems, clean processes, and support that actually resolves the issue.",
    heroIntro:
      "IT technical support specialist who also builds and maintains websites — bridging hands-on infrastructure support with practical web development.",
    focusAreas: [
      "IT Technical Support",
      "Hardware & Network Troubleshooting",
      "Web Development",
      "Data Validation & QA"
    ]
  },

  aboutCards: [
    { label: "Experience", value: "3+ years", icon: "clock" },
    { label: "Location", value: "Muntinlupa City, PH", icon: "pin" },
    { label: "Current Role", value: "IT Technical Support", icon: "badge" },
    { label: "Core Focus", value: "Support · Web · Data", icon: "layers" }
  ],

  skillGroups: [
    {
      id: "support",
      label: "Technical Support",
      items: [
        "IT Technical Support",
        "Hardware & Software Troubleshooting",
        "Computer Installation, Configuration & Maintenance",
        "Printer Installation, Configuration & Troubleshooting",
        "Network Fundamentals & Basic Network Troubleshooting",
        "End-User Support"
      ]
    },
    {
      id: "infra",
      label: "IT Support & Infrastructure",
      items: [
        "Desktop & Laptop Support",
        "User Account & Workstation Setup",
        "IT Equipment Deployment & Tracking",
        "Root Cause Analysis",
        "Remote User Assistance",
        "Audio-Visual & Event Technical Support",
        "Cross-Functional IT Support"
      ]
    },
    {
      id: "web",
      label: "Programming & Web Technologies",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "Next.js",
        "Web Development Fundamentals",
        "Database Management"
      ]
    },
    {
      id: "tools",
      label: "Software & Tools",
      items: [
        "Microsoft Windows",
        "Microsoft Suites",
        "Canva",
        "Adobe Photoshop",
        "Wondershare Filmora"
      ]
    },
    {
      id: "professional",
      label: "Professional Skills",
      items: [
        "Analytical Problem Solving",
        "Customer Service",
        "Communication Skills",
        "Team Collaboration",
        "Attention to Detail",
        "Critical Thinking",
        "Time Management",
        "Adaptability",
        "Continuous Learning",
        "Process Improvement",
        "Documentation Management",
        "Research & Technical Analysis",
        "Organizational Skills"
      ]
    }
  ],

  languages: [
    { name: "Filipino", level: "Native" },
    { name: "English", level: "Professional Working Proficiency" }
  ],

  // Most recent first — order carries real meaning here (a career log).
  experience: [
    {
      id: "hartrodt",
      title: "IT Technical Support",
      company: "a. hartrodt Philippines, Inc.",
      period: "May 2025 — Present",
      current: true,
      overview:
        "Frontline IT support covering system maintenance, asset documentation, data security compliance, and technical support for company events.",
      responsibilities: [
        "Technical Assistance & System Maintenance",
        "IT Asset & Documentation Management",
        "Data Security & Compliance Support",
        "Event Technical Support & Documentation",
        "Cross-Functional Collaboration"
      ],
      tools: ["Windows", "IT Asset Documentation", "Network Support"]
    },
    {
      id: "qurious",
      title: "Web Developer",
      company: "Qurious Media Singapore",
      period: "November 2024 — March 2025",
      current: false,
      overview:
        "Handled ongoing website maintenance and customization for clients, working across content, design, and platform-specific requests.",
      responsibilities: [
        "Managed website maintenance and customization",
        "Created blog posts and updated site content",
        "Modified website designs to meet client needs",
        "Implemented client-specific requests using Wix and WordPress"
      ],
      tools: ["Wix", "WordPress"]
    },
    {
      id: "carrier",
      title: "Data Encoder / Validator",
      company: "Concepcion-Carrier Air Conditioning Company",
      period: "November 2023 — August 2024",
      current: false,
      overview:
        "Focused on data integrity — validating large datasets against strict accuracy and deadline requirements.",
      responsibilities: [
        "Validated large datasets by meticulously cross-referencing them to ensure data integrity and maintain high accuracy levels",
        "Streamlined the data comparison process while meeting strict deadlines for data validation tasks",
        "Collaborated with team members to troubleshoot data issues and implement solutions, ensuring high standards in data management"
      ],
      tools: ["Data Validation", "Cross-Referencing", "QA Process"]
    },
    {
      id: "springvalley",
      title: "Software Developer Trainee (Internship)",
      company: "Spring Valley Tech Corp",
      period: "March 2023 — June 2023",
      current: false,
      overview:
        "Internship focused on full-stack contributions to a Next.js web application, under an Agile team structure.",
      responsibilities: [
        "Collaborated with a development team to build a dynamic web application using Next.js, contributing to both front-end and back-end tasks",
        "Enhanced a cloud-based restaurant platform by developing and implementing key features, improving user engagement",
        "Gained experience in Agile methodology, participating in daily stand-ups and sprint planning"
      ],
      tools: ["Next.js", "Agile / Scrum"]
    }
  ],

  // Derived directly from the experience entries above — no invented
  // names, links, or outcomes beyond what the CV states.
  projects: [
    {
      id: "qurious-sites",
      name: "Client Website Maintenance & Customization",
      role: "Web Developer — Qurious Media Singapore",
      description:
        "Ongoing maintenance and customization of client websites — publishing blog content, updating pages, and adjusting design to match client-specific requests.",
      tech: ["Wix", "WordPress"],
      features: [
        "Blog post creation and content updates",
        "Website design modifications",
        "Client-specific feature requests"
      ],
      link: null,
      code: null
    },
    {
      id: "restaurant-platform",
      name: "Cloud-Based Restaurant Platform Enhancement",
      role: "Software Developer Trainee — Spring Valley Tech Corp",
      description:
        "Contributed front-end and back-end work to a Next.js web application, enhancing a cloud-based restaurant platform to improve user engagement as part of an Agile team.",
      tech: ["Next.js", "Agile / Scrum"],
      features: [
        "Front-end and back-end feature development",
        "User-engagement improvements",
        "Daily stand-ups and sprint planning"
      ],
      link: null,
      code: null
    }
  ],

  education: [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "STI West Negros University",
      period: "June 2019 — July 2023",
      location: null
    }
  ],

  certifications: [
    {
      name: "SAP Business One — SAP Advanced Implementation and Support",
      org: "STI West Negros University",
      date: "June 2022"
    },
    {
      name: "Google Developer Group Bacolod Dev Fest Seminar",
      org: "Acacia Hotel, Bacolod City",
      date: "June 2022"
    },
    {
      name: "Computer System Servicing NCII — Computer Networking",
      org: "TESDA, La Carlota City",
      date: "January 2019"
    }
  ],

  nav: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" }
  ],

  resume: {
    file: "assets/Raymond_John_Managuit_CV.pdf",
    filename: "Raymond_John_Managuit_CV.pdf"
  }
};
