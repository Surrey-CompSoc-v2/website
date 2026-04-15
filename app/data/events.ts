export interface EventCardData {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const eventCards: EventCardData[] = [
  {
    id: "workshops",
    title: "Workshops",
    description:
      "Hands-on sessions that take you from basics to build-ready skills, with guided exercises, real examples, and support from our committee. Themes range from Leetcode to CV & Cover Letter writing, ensuring that we can bring you to an industry-ready level.",
    imageSrc: "/homepage_photos/Hero_Image.png",
    imageAlt: "Students collaborating in a workshop",
  },
  {
    id: "game-jams",
    title: "Game Jams",
    description:
      "Fast-paced, team-based challenges where you design, prototype, and ship a game in a weekend, learning tools and teamwork rapidly. Distinguished speakers and industry judges often attend to provide insights, ensuring you walk away with more than just a game.",
    imageSrc: "/homepage_photos/gamejam_image.jpg",
    imageAlt: "Abstract graphics representing a game jam",
  },
  {
    id: "hackathons",
    title: "Hackathons",
    description:
      "Build something ambitious, meet new teammates, and showcase your project to the community in a supportive, high-energy environment. There are many prizes to be won, and it's a great way to meet new people and learn new skills.",
    imageSrc: "/homepage_photos/hackathon_image.jpg",
    imageAlt: "Students presenting a hackathon project",
  },
  {
    id: "socials",
    title: "Socials",
    description:
      "Relaxed meetups, mixers, and end-of-term socials where you can connect with the community, watch movies, participate in fun activities, and unwind together.",
    imageSrc: "/homepage_photos/socials_image.jpg",
    imageAlt: "3 students enjoying our gamenight",
  },
];
