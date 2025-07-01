import { useEffect, useState } from "react";

type Project = {
  title: string;
  preview: React.ReactNode;
  pageUrl?: string;
  githubUrl: string;
  role: string;
  techUsed: string;
  description: string;
};

interface Props {
  projects: Project[];
  itemsPerSlide?: number;
}

const ProjectCarouselGrid: React.FC<Props> = ({ projects, itemsPerSlide }) => {
  const slides = [] as Project[][];
  const perSlide = itemsPerSlide || projects.length;
  for (let i = 0; i < projects.length; i += perSlide) {
    slides.push(projects.slice(i, i + perSlide));
  }
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(false);
  const [classNamesGrid, setClassNamesGrid] = useState("grid");

  useEffect(() => {
    let newClassNames = "grid";
    if (slides[currentSlide].length <= 1) {
      newClassNames += " only-one";
    }
    if (fade) {
      newClassNames += " fade";
    }
    setClassNamesGrid(newClassNames);
  }, [currentSlide, fade]);
  return (
    <div className="project-carousel-grid">
      <div className="carousel-controls">
        <button
          onClick={() => {
            setTimeout(() => {
              setCurrentSlide((prev) =>
                prev > 0 ? prev - 1 : slides.length - 1
              );
            }, 200);
            setFade(true);
            setTimeout(() => {
              setFade(false);
            }, 500);
          }}
          aria-label="Previous Slide"
          disabled={slides.length <= 1 || fade}
        >
          <svg
            width="24"
            height="24"
            stroke="white"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <span>
          {currentSlide + 1} / {slides.length}
        </span>
        <button
          onClick={() => {
            setTimeout(() => {
              setCurrentSlide((prev) =>
                prev < slides.length - 1 ? prev + 1 : 0
              );
            }, 200);
            setFade(true);
            setTimeout(() => {
              setFade(false);
            }, 500);
          }}
          aria-label="Next Slide"
          disabled={slides.length <= 1 || fade}
        >
          <svg
            width="24"
            height="24"
            stroke="white"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
      <div className={classNamesGrid}>
        {slides[currentSlide].map((project, idx) => (
          <div className="project-card" key={idx}>
            <h3>{project.title}</h3>
            <div className="project-preview">{project.preview}</div>
            <p>{project.description}</p>
            <p>
              <strong>Rol:</strong> {project.role}
            </p>
            <p>
              <strong>Tecnologías usadas:</strong> {project.techUsed}
            </p>
            <div className="project-links">
              {project.pageUrl && (
                <a href={project.pageUrl}>
                  <strong>Entrar a la página</strong>
                </a>
              )}
              <a href={project.githubUrl}>
                <strong>GitHub</strong>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarouselGrid;
