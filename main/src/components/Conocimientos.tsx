import { useEffect, useState } from "react";
import Conocimiento from "./Conocimiento";
import "../styles/Conocimientos.scss";
import iconoPy from "../assets/python-logo.png";
import iconoJava from "../assets/java-logo.png";
import iconoJS from "../assets/js-logo.jpeg";
import iconoOracle from "../assets/oracle-logo.png";
import iconoSqlite from "../assets/sqlite-logo.png";
import iconoMysql from "../assets/mysql-logo.png";
import reactFloating from "../assets/floating-react.png";
import typescriptFloating from "../assets/floating-typescript.png";
import pythonFloating from "../assets/floating-python.png";
import javaFloating from "../assets/floating-java.png";
import nodeJSFloating from "../assets/floating-nodeJS.png";
import jupyterFloating from "../assets/floating-jupyter.png";
import { ChevronRightCircle, Star } from "lucide-react";

const Conocimientos = () => {
  const [activo, setActivo] = useState(1);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  function handleClick(id: number) {
    setActivo(id);
    const element = document.getElementById("descripcionConocimientos");
    if (element) {
      element.style.transform = "translateY(-" + (id - 1) * 33.33 + "%)";
    }
    console.log(element?.style.transform);
  }
  return (
    <section id="seccion-conocimientos" style={{ position: "relative" }}>
      <div className="titulo__conocimientos">
        <h2>CONOCIMIENTOS</h2>
      </div>
      <div className="caja__conocimientos">
        <div className={visible ? "conocimientos" : "conocimientos hidden"}>
          <Conocimiento
            id={1}
            idActivo={activo}
            onActivo={(id) => handleClick(id)}
          >
            <i className="bi bi-terminal" />
            <p>Programación</p>
          </Conocimiento>
          <Conocimiento
            id={2}
            idActivo={activo}
            onActivo={(id) => handleClick(id)}
          >
            <i className="bi bi-database" />
            <p>Bases de datos</p>
          </Conocimiento>
          <Conocimiento
            id={3}
            idActivo={activo}
            onActivo={(id) => handleClick(id)}
          >
            <i
              className="bi bi-code-slash"
              style={{ transform: "translateY(-15%)" }}
            />
            <p>Desarrollo web</p>
          </Conocimiento>
          {window.innerWidth < 768 && (
            <div
              className="left-arrow"
              onClick={() => setVisible((prev) => !prev)}
            >
              <ChevronRightCircle />
            </div>
          )}
        </div>
        <div
          className="descripcion__conocimientos"
          id="descripcionConocimientos"
        >
          <div className="seccion__descripcion__conocimientos">
            <article
              className="titulo__descripcion__conocimientos"
              style={{ flex: 1 }}
            >
              <h2>Lenguajes de programación</h2>
              <div className="separador__descripcion__conocimientos" />
            </article>
            <div
              style={{
                marginBottom: 16,
                textAlign: "center",
                color: "#888",
                fontStyle: "italic",
                fontSize: "1rem",
              }}
            >
              <span>
                <strong>Consejo:</strong>
                {isMobile
                  ? " toca para ver detalles. Presiona la flecha en la izquierda para más."
                  : " pasa el mouse sobre cada tecnología para ver detalles. Hay más a la izquierda."}
              </span>
            </div>
            <div className="lenguajes__descripcion__conocimientos">
              <div className="python__descripcion__conocimientos">
                <img src={iconoPy} alt="icono-python" />
                <h4>Python</h4>
                <ul className="lista__conocimientos">
                  <li>
                    <span style={{ fontWeight: 600 }}>Librerías:</span> Numpy,
                    Matplotlib, Xarray, Pandas, Scikit-learn, TensorFlow
                  </li>
                  <li>
                    <span style={{ fontWeight: 600 }}>Frameworks:</span> PyQt,
                    Flask, Tkinter, FastAPI
                  </li>
                  <li>
                    <span style={{ fontWeight: 600 }}>Paradigmas:</span> OOP,
                    Programación funcional, Scripting
                  </li>
                  <li>
                    <span style={{ fontWeight: 600 }}>Experiencia:</span>{" "}
                    Ciencia de datos, automatización, aplicaciones de
                    escritorio, APIs
                  </li>
                </ul>
              </div>
              <div className="java__descripcion__conocimientos">
                <img src={iconoJava} alt="icono-java" />
                <h4>Java</h4>
                <ul className="lista__conocimientos">
                  <li>
                    <span style={{ fontWeight: 600 }}>Librerías:</span> JavaFX
                  </li>
                  <li>
                    <span style={{ fontWeight: 600 }}>Paradigmas:</span> OOP,
                    Concurrencia
                  </li>
                  <li>
                    <span style={{ fontWeight: 600 }}>Experiencia:</span>{" "}
                    Aplicaciones de escritorio, proyectos académicos
                  </li>
                </ul>
              </div>
              <div className="js__descripcion__conocimientos">
                <img src={iconoJS} alt="icono-javascript" />
                <h4>JavaScript</h4>
                <ul className="lista__conocimientos">
                  <li>
                    <span style={{ fontWeight: 600 }}>Librerías:</span>{" "}
                    <strong>React</strong> (Router, Hook Form),{" "}
                    <strong>JWT</strong>, BodyParser, Passport, CORS, Sesiones,
                    Cookies
                  </li>
                  <li>
                    <span style={{ fontWeight: 600 }}>Frameworks:</span>{" "}
                    <strong>Angular</strong>, <strong>Electron</strong>,{" "}
                    <strong>ExpressJS</strong>
                  </li>
                  <li>
                    <span style={{ fontWeight: 600 }}>Paradigmas:</span>{" "}
                    Programación funcional, OOP, Asíncrono (Promises,
                    Async/Await)
                  </li>
                  <li>
                    <span style={{ fontWeight: 600 }}>Experiencia:</span>{" "}
                    Desarrollo de SPAs, APIs REST, aplicaciones de escritorio,
                    autenticación, integración de servicios
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="seccion__descripcion__conocimientos">
            <article
              className="titulo__descripcion__conocimientos"
              style={{ flex: 1 }}
            >
              <h2>Lenguajes SQL</h2>
              <div className="separador__descripcion__conocimientos" />
            </article>
            <article className="db__descripcion__conocimientos">
              <div className="conocimientos__db">
                <div className="conocimiento__db">
                  <div className="mysql__descripcion__conocimientos">
                    <img src={iconoMysql} alt="icono-mysql" />
                  </div>
                  <h3>MySQL</h3>
                </div>
                <div className="conocimiento__db">
                  <div className="osql__descripcion__conocimientos">
                    <img src={iconoOracle} alt="icono-oracle" />
                  </div>
                  <h3>Oracle SQL</h3>
                </div>
                <div className="conocimiento__db">
                  <div className="sql3__descripcion__conocimientos">
                    <img src={iconoSqlite} alt="icono-sqlite" />
                  </div>
                  <h3>SQLite3</h3>
                </div>
              </div>
              <ul className="lista__conocimientos__texto">
                <li>
                  Experiencia en <strong>diseño</strong> y{" "}
                  <strong>gestión avanzada</strong> de bases de datos
                  relacionales, así como <strong>modelado de esquemas</strong>{" "}
                  como modelos relacionales y entidad-relación.
                </li>
                <li>
                  Aplicación de la <strong>tercera forma normal (3NF)</strong>{" "}
                  para optimizar la estructura y eliminar redundancias.
                </li>
                <li></li>
                <li>
                  Experiencia en{" "}
                  <strong>
                    consultas complejas, normalización y optimización de
                    rendimiento
                  </strong>
                  .
                </li>
              </ul>
            </article>
          </div>
          <div className="seccion__descripcion__conocimientos">
            <article
              className="titulo__descripcion__conocimientos"
              style={{ flex: 1 }}
            >
              <h2>Herramientas</h2>
              <div className="separador__descripcion__conocimientos" />
            </article>
            <article
              className="herramientas__descripcion__conocimientos"
              style={{ flex: 5 }}
            >
              <div className="herramientas__categorias">
                <div className="herramientas__categoria">
                  <h4>Frontend</h4>
                  <ul>
                    <li>
                      React{" "}
                      <Star
                        size={16}
                        style={{ marginLeft: 4, color: "#FFD700" }}
                      />
                    </li>
                    <li>Angular</li>
                    <li>Electron</li>
                    <li>HTML5</li>
                    <li>
                      CSS3 / SASS{" "}
                      <Star
                        size={16}
                        style={{ marginLeft: 4, color: "#FFD700" }}
                      />
                    </li>
                    <li>
                      JavaScript / TypeScript{" "}
                      <Star
                        size={16}
                        style={{ marginLeft: 4, color: "#FFD700" }}
                      />
                    </li>
                  </ul>
                </div>
                <div className="herramientas__categoria">
                  <h4>Backend</h4>
                  <ul>
                    <li>
                      Node.js{" "}
                      <Star
                        size={16}
                        style={{ marginLeft: 4, color: "#FFD700" }}
                      />
                    </li>
                    <li>ExpressJS</li>
                    <li>Flask</li>
                    <li>
                      FastAPI{" "}
                      <Star
                        size={16}
                        style={{ marginLeft: 4, color: "#FFD700" }}
                      />
                    </li>
                    <li>
                      JWT{" "}
                      <Star
                        size={16}
                        style={{ marginLeft: 4, color: "#FFD700" }}
                      />
                    </li>
                  </ul>
                </div>
                <div className="herramientas__categoria">
                  <h4>DevOps</h4>
                  <ul>
                    <li>InfinityHost</li>
                    <li>AWS Lambda</li>
                    <li>
                      Vercel{" "}
                      <Star
                        size={16}
                        style={{ marginLeft: 4, color: "#FFD700" }}
                      />
                    </li>
                    <li>Netlify</li>
                  </ul>
                </div>
                <div className="herramientas__categoria">
                  <h4>UI/UX</h4>
                  <ul>
                    <li>
                      Balsamiq{" "}
                      <Star
                        size={16}
                        style={{ marginLeft: 4, color: "#FFD700" }}
                      />
                    </li>
                    <li>
                      Figma{" "}
                      <Star
                        size={16}
                        style={{ marginLeft: 4, color: "#FFD700" }}
                      />
                    </li>
                  </ul>
                </div>
                <div className="herramientas__categoria">
                  <h4>Colaboración</h4>
                  <ul>
                    <li>
                      Git{" "}
                      <Star
                        size={16}
                        style={{ marginLeft: 4, color: "#FFD700" }}
                      />
                    </li>
                    <li>
                      GitHub{" "}
                      <Star
                        size={16}
                        style={{ marginLeft: 4, color: "#FFD700" }}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className="floating-icons">
        <img src={reactFloating} className="icon neon top-left" alt="React" />
        <img
          src={typescriptFloating}
          className="icon neon mid-left"
          alt="TypeScript"
        />
        <img
          src={pythonFloating}
          className="icon neon bottom-left"
          alt="Python"
        />
        <img src={javaFloating} className="icon neon top-right" alt="Java" />
        <img
          src={nodeJSFloating}
          className="icon neon mid-right"
          alt="Node.js"
        />
        <img
          src={jupyterFloating}
          className="icon neon bottom-right"
          alt="Jupyter"
        />
      </div>
    </section>
  );
};

export default Conocimientos;
