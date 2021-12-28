const settings = {
  isSplash: false,
};

//SEO Related settings
const seo = {
  title: "Sai Teja's Portfolio",
  description:
  "A passionate Java Full Stack Developer having experience in building Web applications using Reactjs, Java, Spring Boot and MySQL as database.",
  og: {
    title: "Sai Teja's Developer Portfolio",
    type: "website",
    url: "https://softwaresai.github.io",
  },
};

//Home Page
const greeting = {
  title: "Sai Teja",
  logo_name: "Sai Teja",
  nickname: "Software Developer",
  subTitle:
    "A passionate Java Full Stack Developer having experience in building Web applications using Reactjs, Java, Spring Boot and MySQL as database.",
  resumeLink: "https://drive.google.com/file/d/10fF_A0emd2Fm_uxWIXIJIjdQgaN1xuVD/view?usp=sharing",
  githubProfile: "https://github.com/palamsaiteja333",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/palamsaiteja333",
    fontAwesomeIcon: "fa-github", 
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sai-teja-reddy-palam-1538aa137/",
    fontAwesomeIcon: "fa-linkedin-in", 
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:palamsaiteja333@gmail.com",
    fontAwesomeIcon: "fa-google", 
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "🔥 Building resposive website front end using React.",
        "🔥 Creating application backend in Java, Spring Boot & Hibernate.",
        "🔥 Creating and implementing computer databases using MySQL.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#ff0505",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#05ff3f",
          },
        },

        {
          skillName: "SQL Database",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Click to veiw my LeetCode profile",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#FFA116",
      },
      profileLink: "https://leetcode.com/palamsaiteja333/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "St. Francis Xavier University",
      subtitle: "Masters in Applied Computers Science",
      logo_path: "StFX.png",
      alt_name: "StFX",
      duration: "Sept' 2021 - Present",
      descriptions: [
        "As part of my first semester completed some advanced courses like:",

        "💻 Constraint Processing and Heuristic Search, this course helped me to examine combinatorial problem solving and optimization with constraint processing and heuristic search methods for a variety of real world applications.",

        "💻 Semantic Web Technology, often referred to as Web 3.0 helped me to understand vision and principles of the Semantic Web; representation languages (XML, RDF, RDF Schema, OWL); knowledge modeling: ontologies, linked data, and knowledge graphs; logical reasoning in RDF and OWL."
      ],
      website_link: "https://www.stfx.ca/",
    },

    {
      title: "Sathyabama Institute of Science and Technology",
      subtitle: "B.E. in Computer Science and Engineering",
      logo_path: "Sathyabama_Institute_of_Science_and_Technology_logo.png",
      alt_name: "Sathybama University",
      duration: "July 2014 - April 2018",
      descriptions: [
        "💻 I have studied basic software engineering subjects like Programming in C, Java, DBMS, Computer Architecture & Organization, etc.",
        "💻 Apart from this, I have presented papers on “Ransomware” and “Li-fi (Light Fidelity)” in national level tech fests.",
        "🏆 Awarded best student ambassador for “Kurukshetra”, which is an annual international techno-management festival conducted by Anna University, Guindy.",
      ], 
      website_link: "https://www.sathyabama.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Microsoft Certified: Azure Fundamentals",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.credly.com/badges/6bf8491a-8ef7-4874-af25-1df927ee17aa?source=linked_in_profile",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "How to Build Chatbots",
      subtitle: "- Cognitive Class",
      logo_path: "cognitiveclassai.jpg",
      certificate_link:
        "https://courses.cognitiveclass.ai/certificates/a5b9e3b7141c469d8af840a29d554a0d",
      alt_name: "cognitiveclass.ai",
      color_code: "white",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "( Work & Internship)",
  description:
  "Experienced Engineer with 2.5 years, versatile in quickly adapting to new technical and digital conventions with a 'can-do' attitude. I am happy working as an individual contributor or in a close team environment and apply a positive attitude to every project. Very efficient in communicating with a wide range of clients, coworkers, and stakeholders. Possess problem solving capability peered with strong communication and interpersonal skills. I'm a conscientious person who works hard and pays attention to detail. I'm flexible, quick to pick up new skills, and eager to learn from others.",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Application Developer",
          company: "IBM India Private Limited",
          company_url: "https://www.ibm.com/in-en",
          logo_path: "ibm_logo.png",
          duration: "Apr 2019 - Aug 2021",
          location: "Bangalore, India.",
          description:
            "After completing my bachelor’s in Computer Science at Sathyabama University, I worked for IBM India Private Limited as an Application Developer situated in Bangalore, where I worked with a German client, Erste Financial Services (EFS).  As a Full Stack Developer, I owned the responsibilities to design, develop, test, and deploy software builds, resulting in the implementation of low-latency, high-availability, and performing applications, according to Business Requirements. One of my outstanding development in here is developing a system that mimic the process of sending files to customers instead of using the IBM Cognos Analytics tool with the help of objective oriented programming language Java, MySQL, Data Structures and Algorithms that made me proficient in them in the development process.",

          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Intern",
          company: "Hewlett Packard Enterprise",
          company_url: "https://www.hpe.com/in/en/home.html",
          logo_path: "hp_logo.png",
          duration: "June 2017 - July 2017",
          location: "Chennai, India.",
          description:
            "Designed and developed a Student Database Management System using Java and MySQL.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Below are the list of projects that can be viewed in Github which are implemented using HTML, CSS, JavaScript, React, Java, Spring Boot and MySQL.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Sai_Teja_Reddy_Palam.jpg",
    description:
      "As a full-time Computer Science Master’s student at St. Francis Xavier University, I am actively looking 👀 for Summer Internships in Software Engineering/Application Development roles. I am currently enrolled in the Co-Op Education program and I am available for an eight month internship starting in May 2022. Throughout my professional life, I have always had a deep passion for developing applications and providing customers the highest possible value. Please let me know if there are any opportunities available:",
  },

  addressSection: {
    title: "Address",
    subtitle:
      "5555 Union Place, #1197, StFX University, Antigonish, NS, Canada - B2G 2W5",
    avatar_image_path: "address_image.svg",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+1 (902)995-0333",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
