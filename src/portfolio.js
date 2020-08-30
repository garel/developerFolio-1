
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Balázs Sárközi",
  title: "Hi all, I'm Balázs",
  subTitle: emoji("A freelance Software Engineer with over 5 years of experience with freelance professional software development."),
  resumeLink: ""
};

// Your Social Media Link

const socialMediaLinks = {

  // github: "https://github.com/saadpasta",
  // linkedin: "https://www.linkedin.com/in/saadpasta/",
  // gmail: "saadpasta70@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I do?",
  subTitle: "",
  skills: [
    emoji("⚡ Develop ecommerce portals"),
    emoji("⚡ Creating application backend"),
    emoji("⚡ Building resposive websites"),
    emoji("⚡ Design and implement SaaS solutions"),
    emoji("⚡ Plan and deploy cloud based infrastructure")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "mnfrastructure-management",
      fontAwesomeClassname: "fab fa-aws"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "60%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Infrastructure management",
      progressPercentage: "65%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Freelancer",
      companylogo: require("./assets/images/logo.svg"),
      date: "July 2012 – Present",
      desc: "I started working on side projects as a freelancer in 2012. Since 2015 its my main occupation.",
    },
    {
      role: "Backend engineer",
      company: "Aton technology ltd.",
      companylogo: require("./assets/images/at.svg"),
      date: "February 2014 - December 2014",
      desc: "Key responsibilites: maintaining and developing existing backend codebase on an SaaS system.",
      descBullets: [
        "Maintaining existing backend code base",
        "Developing new SaaS functions"
      ]
    },
    {
      role: "Full Stack Web developer",
      company: "Viale kft",
      companylogo: require("./assets/images/viale.svg"),
      date: "September 2012 - November 2013",
      desc: "Key responsibilites: ",
      descBullets: [
        "Developing new ecommerce features",
        "Frontend design"
      ]
    },
    {
      role: "System administrator",
      company: "STV Services Gmbh",
      companylogo: require("./assets/images/admin.svg"),
      date: "May 2011 - March 2012",
      desc: "Key responsibilities: ",
      descBullets: [
          "Maintaining IT infrastructure",
          "Providing desktop support"
      ]
    },
    {
      role: "ERP system developer",
      company: "WinTrade 2000 Bt.",
      companylogo: require("./assets/images/wintrade.svg"),
      date: "October 2009 - Jun 2010",
      desc: "Key responsibilites: ",
      descBullets: [
          "Developing new features for the internal erp system"
      ]
    },
    {
      role: "Intern",
      company: "Telenor Hungary zrt.",
      companylogo: require("./assets/images/telenor.svg"),
      date: "May 2007 - August 2009",
      desc: "Key responsibilites",
      descBullets: [
          "Maintaining old services",
          "Developing new functionalities for the Telenor Mobile Portal and other platforms",
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  // githubConvertedToken: "",
  // githubUserName: "garel", // Change to your github username to view your profile in Contact Section.
  // showGithubProfile :"false" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Project highligths",
  subtitle: "Case studies",
  projects: [
    {
      image: require("./assets/images/abacus.svg"),
      link: "https://projects.sarkozibalazs.dev/abacus-procurment-support"
    },
    {
      image: require("./assets/images/lisa.svg"),
      link: "https://projects.sarkozibalazs.dev/lisa-erp"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "",

  achivementsCards: [
    {
      title: "Sap certified ABAP developer",
      subtitle: "",
      image: require("./assets/images/sap-vector-logo.svg"),
      footerLink: [
        { name: "Certification", url: "https://training.sap.com/certification/e_hanaaw_14-sap-certified-development-specialist---abap-for-sap-hana-20-g/" }
      ]
    },
    {
      title: "AWS solutions architect",
      subtitle: "Course on Udemy",
      image: require("./assets/images/aws.svg"),
      footerLink: [
          { name: "Course", url: "https://www.udemy.com/course/aws-certified-solutions-architect-associate/" }
        ]
    },

    {
      title: "DevOps Deployment Automation with Terraform",
      subtitle: "Course on udemy",
      image: require("./assets/images/terraform.svg"),
      footerLink: [
        { name: "Course", url: "https://www.udemy.com/course/devops-deployment-automation-terraform-aws-docker/" },
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or an idea? My Inbox is open for all.",
  number: "+36705973833",
  email_address: "hello@sarkozibalazs.dev"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
