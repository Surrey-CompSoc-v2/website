export type CommitteeMember = {
  name: string;
  role: string;
  group: "Signatories" | "Wellbeing Champions" | "Non-Signatories";
  description: string;
  year: string;
  photo?: string;
  linkedin?: string;
  github?: string;
};

export const committeeMembers: CommitteeMember[] = [
  {
    name: "Alessio Vigliotta",
    role: "President",
    group: "Signatories",
    description: "Leads the society and represents CompSoc across the university.",
    year: "2nd Year",
    photo: "/committee_photos/Alessio_Image.png",
    linkedin: "https://www.linkedin.com/in/alessio-v-aav/",
    github: "https://github.com/Alessio-Vigliotta",
  },
  {
    name: "Abdul Malik",
    role: "Vice President",
    group: "Signatories",
    description: "Supports the president and keeps initiatives moving forward.",
    year: "2nd Year",
    photo: "/committee_photos/Abdul_Image.jpg",
    linkedin: "https://www.linkedin.com/in/abzimo-malik/",
    github: "https://github.com/abzymalik",
  },
  {
    name: "Angela Melbourne",
    role: "Treasurer",
    group: "Signatories",
    description: "Manages budgets, finances, and funding for events.",
    year: "2nd Year",
    photo: "/committee_photos/Angela_Image.png",
    linkedin: "https://www.linkedin.com/in/angela-melbourne-609278290/",
  },
  {
    name: "Zoe Weston",
    role: "Wellbeing Champion",
    group: "Wellbeing Champions",
    description: "Promotes a welcoming, inclusive, and supportive community.",
    year: "2nd Year",
    photo: "",
    linkedin: "https://www.linkedin.com/in/zoe-weston-a215842ba/",
    github: "https://github.com/Zobotz",
  },
  {
    name: "Isabelle Wickens",
    role: "Wellbeing Champion",
    group: "Wellbeing Champions",
    description: "Encourages member wellbeing and organizes supportive initiatives.",
    year: "2nd Year",
    photo: "/committee_photos/Isabelle_Image.jpg",
    linkedin: "https://www.linkedin.com/in/isabelle-wickens/",
  },
  {
    name: "Ferro Gadhia",
    role: "Event Manager",
    group: "Non-Signatories",
    description: "Plans and coordinates events across the academic year.",
    year: "3rd Year",
    photo: "/committee_photos/Ferro_Gadhia.jpg",
    linkedin: "https://www.linkedin.com/in/ferro-gadhia/",
    github: "https://github.com/ferro-gadhia",
  },
  {
    name: "Maryam Karous",
    role: "Social Media Manager",
    group: "Non-Signatories",
    description: "Curates content and shares CompSoc updates online.",
    year: "2nd Year",
    photo: "/committee_photos/Maryam_Karous.jpg",
    linkedin: "https://www.linkedin.com/in/maryam-karous-78b674280/",
  },
  {
    name: "Molly Sheppard",
    role: "Social Media Manager",
    group: "Non-Signatories",
    description: "Creates campaigns to highlight events and members.",
    year: "2nd Year",
    photo: "/committee_photos/Molly_Sheppard.jpg",
    linkedin: "https://www.linkedin.com/in/molly-sheppard-328a47307/",
  },
  {
    name: "Cristina Gheorghe",
    role: "Webmaster",
    group: "Non-Signatories",
    description: "Builds and maintains the CompSoc website.",
    year: "2nd Year",
    photo: "/committee_photos/Cristina_Gheorghe.jpg",
    linkedin: "https://www.linkedin.com/in/cristina-gheorghe-0a6053285/",
    github: "https://github.com/crisTINACFG",
  },
  {
    name: "Raghav Commandur",
    role: "Webmaster",
    group: "Non-Signatories",
    description: "Maintains site features and deployments.",
    year: "2nd Year",
    photo: "/committee_photos/Raghav_Commandur.jpg",
    linkedin: "https://www.linkedin.com/in/raghavcommandur/",
    github: "https://github.com/rxghavc",
  },
];
