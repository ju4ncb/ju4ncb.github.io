import ProjectCarouselGrid from "./ProjectCarouselGrid";
import themisSrc from "../assets/themis-preview.png";
import h2oSrc from "../assets/h2o-preview.png";
import wheelTrackerSrc from "../assets/wheel-tracker-preview.png";
import contaSrc from "../assets/conta-preview.png";
import jesiSrc from "../assets/jesi-preview.png";
import ruletaSrc from "../assets/ruleta-preview.png";
import "../styles/Proyectos.scss";
import { useEffect, useState } from "react";
import ImgWithLoader from "./ImgWithLoader";

const webProjects = [
  {
    title: "THEMIS",
    preview: <ImgWithLoader src={themisSrc} alt="Vista previa de Themis" />,
    pageUrl: "https://themis-front.vercel.app/",
    githubUrl: "https://github.com/ju4ncb/themis",
    role: "Desarrollador Full Stack y Líder de Proyecto",
    techUsed:
      "React Vite, TypeScript, Express, MySQL, SCSS, Flask, Scikit-learn",
    description:
      "Plataforma para análisis y visualización avanzada de datos, incluyendo exploración interactiva y modelos de Machine Learning.",
  },
  {
    title: "H2O Esperanza",
    preview: <ImgWithLoader src={h2oSrc} alt="Vista previa de H2O Esperanza" />,
    pageUrl: "https://h2oesperanza.netlify.app/",
    githubUrl: "https://github.com/ju4ncb/h2o",
    role: "Creador y Desarrollador Full Stack",
    techUsed: "React Vike SSR, TypeScript, Express, MySQL, SCSS, Serverless",
    description:
      "Aplicación educativa sobre los Objetivos de Desarrollo Sostenible, con preguntas dinámicas para facilitar el aprendizaje.",
  },
  {
    title: "Wheel Tracker",
    preview: (
      <ImgWithLoader
        src={wheelTrackerSrc}
        alt="Vista previa de Wheel Tracker"
      />
    ),
    pageUrl: "https://wheel-tracker-front.vercel.app/",
    githubUrl: "https://github.com/ju4ncb/wheel_tracker",
    role: "Desarrollador Full Stack y Líder de Proyecto",
    techUsed: "HTML5, CSS, JavaScript, jQuery, Flask, Jinja2, MySQL",
    description:
      "Herramienta web para recomendar llantas adecuadas según el vehículo ingresado por el usuario.",
  },
  {
    title: "CONTA",
    preview: <ImgWithLoader src={contaSrc} alt="Vista previa de Conta Page" />,
    pageUrl: "https://conta-front.vercel.app/",
    githubUrl: "https://github.com/ju4ncb/conta_page",
    role: "Desarrollador Full Stack y Líder de Proyecto",
    techUsed: "React Vike SSR, TypeScript, Express, MySQL, SCSS",
    description:
      "Plataforma de cartera virtual para la gestión y control de finanzas personales.",
  },
  {
    title: "Portafolio Jessica Santos",
    preview: (
      <ImgWithLoader
        src={jesiSrc}
        alt="Vista previa de Portafolio Jessica Santos"
      />
    ),
    pageUrl: "https://jessloren.netlify.app",
    githubUrl: "https://github.com/ju4ncb/portafolio-jes",
    role: "Desarrollador Front y Creador del diseño",
    techUsed: "React Vite, SCSS",
    description: "Página web para portafolio personal.",
  },
];

const otherProjects = [
  {
    title: "Ruleta con PyQT",
    preview: <img src={ruletaSrc} alt="ruleta-preview" />,
    githubUrl: "https://github.com/ju4ncb/ruleta",
    role: "Creador y Desarrollador",
    techUsed: "Python, PyQT",
    description:
      "Ruleta desarrollada con PyQT, que permite jugar a la ruleta con una interfaz gráfica.",
  },
];

const Proyectos = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div id="seccion-proyectos" style={{ minHeight: 400, color: "white" }}>
      <div className="triangulo__superior__proyectos">
        <h2>PROYECTOS</h2>
      </div>
      <h1 style={{ textAlign: "center" }}>Diseños y aplicaciones web:</h1>

      {/* Carousel grid of 4 projects per slide */}
      <ProjectCarouselGrid
        projects={webProjects}
        itemsPerSlide={isMobile ? 1 : 4}
      />

      <h1 style={{ textAlign: "center", marginTop: 48 }}>Otros:</h1>
      {/* Carousel of 1 project per slide */}
      <ProjectCarouselGrid projects={otherProjects} />
    </div>
  );
};

export default Proyectos;
