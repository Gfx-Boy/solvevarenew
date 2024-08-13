// This is just a javascript file that has some variales and in thoes variables data is stored eg in navLinks
// data for the navbar is stored in javascript objects so we can fetch it easily 


import { people1,graphicportfolio1,graphicportfolio2,graphicportfolio3,graphicportfolio4,graphicportfolio5,graphicportfolio6,graphicportfolio7,graphicportfolio8,graphicportfolio9,graphicportfolio10,graphicportfolio11, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets/assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "Services",
    title: "Services",
  },
  {
    id: "contactus",
    title: "Contact",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "WebApps/Websites",
    content:
      "Get high-performance web apps and sites with sleek design, robust e-commerce, and top-notch SEO. Elevate your online presence with us!",
  },
  {
    id: "feature-2",
    icon: star,
    title: "100% Secured",
    content:
      "Experience 100% secure web solutions with custom apps, SEO, fast hosting, and digital marketing. Trust us for fast, safe, and effective results!",
  },
  {
    id: "feature-3",
    icon: star,
    title: "Fast Hosting",
    content:
      "Enjoy lightning-fast performance with our secure, reliable hosting. Boost user experience with high uptime and top-tier support!",
  },
  {
    id: "feature-4",
    icon: star,
    title: "Graphic Designing",
    content:
      "Transform your brand with stunning, custom graphic designs for logos, marketing materials, and social media. Make a lasting impression with our visuals!",
  },
  {
    id: "feature-5",
    icon: star,
    title: "SEO",
    content:
      "Drive organic traffic and enhance your search rankings with our comprehensive SEO strategies. Expand your online reach and achieve measurable results!",
  },
  {
    id: "feature-6",
    icon: star,
    title: "Digital Marketing",
    content:
      "Amplify your brand with tailored digital marketing strategies across social media, email, and ads. Boost engagement and conversions with our expert approach!",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "I would highly recommend Solvevare -- the team was responsive, reliable, and flexible to meet our needs. The project went by smoothly and according to plan, exceeding expectations. They were a pleasure to work with from beginning to end, making themselves available for questions and follow ups even after project completion.",
    name: "Herman Jensen",
    title: "Founder of Celeste Home",
    img: people1,
  },
  {
    id: "feedback-2",
    content:
      "Solvevare is the last development team you'll ever need. Their level of due diligence goes unmatched and it shows in the end product every time. From discovery, design and UX to project management and deployment, the team is a complete joy to work with. Having worked with over a dozen agencies on a number projects, I can say with confidence Solvevare is the last team of developers we'll ever need for life",
    name: "Jordan",
    title: "Founder of Kemo Sabe",
    img: people1,
  },
  {
    id: "feedback-3",
    content:
      "We have been using Solvevare exclusively for website programming and design since 2023. They offer exceptional service and always find a solution for whatever we need.",
    name: "Kenn Gallagher",
    title: "Leader of Crushr",
    img: people1,
  },
];

export const graphicport2=[
  {
    id: "feedback-1",
    img: graphicportfolio1,
  },
  {
    id: "feedback-2",
    img: graphicportfolio2,
  },
  {
    id: "feedback-3",
    img: graphicportfolio3,
  },
  {
    id: "feedback-4",
    img: graphicportfolio4,
  },
  {
    id: "feedback-5",
    img: graphicportfolio5,
  },
  {
    id: "feedback-6",
    img: graphicportfolio6,
  },
  {
    id: "feedback-7",
    img: graphicportfolio7,
  },
  {
    id: "feedback-8",
    img: graphicportfolio8,
  },
  {
    id: "feedback-9",
    img: graphicportfolio9,
  },
  {
    id: "feedback-10",
    img: graphicportfolio10,
  },
  {
    id: "feedback-11",
    img: graphicportfolio11,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Trusted Clients",
    value: "100+",
  },
  {
    id: "stats-2",
    title: "Sucess Rate",
    value: "100%",
  },
  {
    id: "stats-3",
    title: "Focus Driven",
    value: "100%",
  },
];

export const footerLinks = [
  {
    title: "Contact",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  }
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];