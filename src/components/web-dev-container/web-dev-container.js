import "./_web-dev-container.scss";
import netflixThumbnail from "../../static/images/netflix-clone.jpg";
import ProjectCardWd from "../project-cards/web-dev/project-card-wd";

const webDevPortfolio = [
  {
    title: "Netflix Clone",
    thumbnail: netflixThumbnail,
    description:
      "I wanted to challenge myself by creating a clone of one of the most popular streaming services, Netflix. My Netflix clone project is a responsive web application that replicates the core features of the original Netflix user interface from the home page to the signup and login pages. The project demonstrates my skills in creating modular and scalable web applications, including movie and TV show listings, and user authentication.",
    techStack: [
      "React.js",
      "SASS",
      "Firebase",
      "TMBD Api",
      "React Router",
      "React Redux",
    ],
    demoLink: "https://netflix-clone-780a5.web.app",
    gitHubLink: "https://github.com/Ofonna-N/netflix-clone",
  },
  {
    title: "bags-n-shoes",
    thumbnail: netflixThumbnail,
    description:
      "An ecommerce website built with Next.js, TailwindCSS, React Redux, Firebase Auth, and Strapi CMS. With Next.js, I achieved fast server-side rendering and optimized performance. The sleek UI, designed with Tailwind CSS, ensures a visually appealing and responsive experience. User authentication is handled securely using Firebase Auth. Strapi CMS enables easy management of product listings and content updates. Discover a seamless blend of cutting-edge technologies for a modern ecommerce experience.",
    techStack: [
      "React.js",
      "Next.js",
      "Tailwin CSS",
      "Firebase Auth",
      "React Router",
      "React Redux",
      "Strapi",
    ],
    demoLink: "https://bags-n-shoes-ecommerce-store.vercel.app",
    gitHubLink: "https://github.com/Ofonna-N/bags-n-shoes--ecommerce-stroe-",
  },
];

const webDevPortfolioDisplay = () => {
  return webDevPortfolio.map((project, i) => (
    <ProjectCardWd
      key={i}
      title={project.title}
      thumbnail={project.thumbnail}
      description={project.description}
      techStack={project.techStack}
      demoLink={project.demoLink}
      githubLink={project.gitHubLink}
    />
  ));
};

function WebDevContainer() {
  return <div className="web-dev-container">{webDevPortfolioDisplay()}</div>;
}

export default WebDevContainer;
