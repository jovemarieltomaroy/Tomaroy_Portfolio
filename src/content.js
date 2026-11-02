export const person = {
  name: "Jove Mariel Tomaroy",
  firstName: "Jove Mariel",
  initials: "JT",
  eyebrow: "HI, I'M JOVE MARIEL TOMAROY",
  eyebrowrole: "BS Information Technology · Database Systems",
  role: "IT Student & Database Systems Major",
  headline: "Turning ideas into thoughtful digital experiences.",
  introduction:
    "An IT student exploring software development, machine learning, and intelligent applications, with a growing interest in building practical solutions.",
  location: "Iligan City, Philippines",
  email: "jovemariel.r.tomaroy@gmail.com",
  github: "https://github.com/jovemarieltomaroy",
  linkedin: "https://www.linkedin.com/in/jovemarieltomaroy/",
  portrait: "/images/HomeProfile.png",
  aboutImage: "/images/AboutProfile.jpeg",
  resume: "/resume/Jove_Mariel_Tomaroy_CV.pdf",
  education: "BS Information Technology · Database Systems",
  university: "Mindanao State University – Iligan Institute of Technology",
  gradYear: "2027",
  cgpa: "1.34",
  honors: "Chancellor’s Lister · Dean’s Lister · Rizal’s Lister",
};

export const projectCategories = [
  "All projects",
  "Web applications",
  "AI & data",
];
export const projects = [
  {
    no: "01",
    title:
      "My.GUIDE: An Enhanced Case Management System with LLM-Based Intervention Recommendations and Analytics Dashboard",
    type: "Web applications",
    tag: "IN DEVELOPMENT",
    subtitle: "AI-assisted guidance case management",
    description:
      "A web-based guidance case management system with digital case records, workflow tools, and an analytics dashboard. Leading the team and developing a RAG-based recommendation module using MongoDB Atlas Vector Search and a locally hosted LLM.",
    stack: ["React", "Node.js", "MongoDB", "RAG", "Ollama"],
    role: "Team Lead · Full-stack Developer",
    image: "/images/MyGUIDE.jpeg",
    github: "", 
    live: "",
  },
  {
    no: "02",
    title: "MIDSAKatuparan: WishLink",
    type: "Web applications",
    tag: "WEB APPLICATION",
    subtitle: "A more meaningful way to grant wishes",
    description:
      "A Christmas wish-tracking platform with QR-linked wish pages, donor reservations, and campaign tracking. Includes an officer dashboard for monitoring wishes, donors, fulfillment, and drop-offs.",
    stack: ["React", "Express", "Node.js", "MongoDB"],
    role: "Full-stack Developer",
    image: "/images/WishLink.png",
    github: "",
    live: "",
  },
  {
    no: "03",
    title: "MIDSA Inventory Management System",
    type: "Web applications",
    tag: "WEB APPLICATION",
    subtitle: "Simplifying organizational asset and equipment tracking",
    description:
      "Developed a web-based inventory management system for organizing and monitoring organizational assets and equipment. Features include centralized inventory records, search and filtering, QR code generation for item identification, and CSV data import.",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Firebase Authentication",
    ],
    role: "Full-Stack Developer",
    image: "/images/Inventory.png",
    github: "",
    live: "",
  },
];

export const skills = [
  { title: "Languages & web", items: ["JavaScript", "HTML", "CSS", "Python"] },
  {
    title: "Frameworks & backend",
    items: ["React.js", "Node.js", "Express.js", "REST APIs"],
  },
  { title: "Databases", items: ["MongoDB", "SQL", "Neo4j"] },
  {
    title: "AI & data",
    items: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "RAG",
      "Embeddings",
      "Vector Search",
      "LLM Integration",
    ],
  },
  {
    title: "Tools & workflow",
    items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Postman"],
  },
];

export const leadership = [
  {
    year: "2026 – Present",
    role: "Web Developer, MIDSA Bulletin",
    org: "MSU-IIT DOST-SEI Scholars’ Association",
    description:
      "Contributing to the organization’s digital presence and communication.",
    image: "/images/LeadershipPicture.jpeg",
  },
  {
    year: "2025 – 2026",
    role: "Deputy Chairperson of the Board / Board Member",
    org: "MIDSA",
    description:
      "Supported organizational planning, coordination, and student-led initiatives.",
    image: "",
  },
  {
    year: "2023 – 2024",
    role: "Block Representative, IT Block A",
    org: "CCS Student Council",
    description:
      "Represented students and helped coordinate concerns and communication.",
    image: "",
  },
  {
    year: "2023 – 2025",
    role: "Associate, Executive Committee",
    org: "MIDSA",
    description: "Participated in organization activities and committee work.",
    image: "",
  },
];

export const leadershipPhotos = [
  {
    src: "/images/LeadershipPicture.jpeg",
    alt: "Jove participating in a student leadership activity",
  },
  {
    src: "/images/LeadershipPicture2.jpg",
    alt: "Student leadership and involvement photo 2",
  },
  {
    src: "/images/LeadershipPicture6.jpg",
    alt: "Student leadership and involvement photo 3",
  },
  {
    src: "/images/leadership2.jpeg",
    alt: "Student leadership and involvement photo 4",
  },
  {
    src: "/images/LeadershipPicture5.jpeg",
    alt: "Student leadership and involvement photo 5",
  },
];
