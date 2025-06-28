import githubSrc from "../assets/github.svg";
import linkedInSrc from "../assets/linkedin.svg";
import "../styles/Contacto.scss";

const Contacto = () => {
  return (
    <section id="seccion-contacto">
      <div className="triangulo__superior__contacto">
        <h2>CONTACTO</h2>
      </div>
      <div className="seccion__contacto">
        <div className="caja__contacto">
          <div className="informacion__acerca-de-mi">
            <div className="caja__texto__contacto">
              <h3>Acerca de mí</h3>
              <p>
                Estudiante de ingeniería de sistemas actualmente cursando 8vo
                semestre, con conocimientos en desarrollo web Fullstack y movil,
                así como en bases de datos, programación orientada a objetos,
                Cloud Computing, desarrollo ágil y arquitectura de software. Me
                apasiona aprender nuevas tecnologías y mejorar mis habilidades
                constantemente. Busco oportunidades para aplicar mis
                conocimientos en proyectos reales y seguir creciendo
                profesionalmente.
              </p>
            </div>
            <div className="contenedor__imagen__contacto">
              <div className="imagen__contacto" />
            </div>
          </div>
          <div className="informacion__contacto">
            <div className="linea__texto__contacto">
              <a href="https://github.com/ju4ncb" target="_blank">
                GitHub
                <img
                  className="icon icon__img"
                  src={githubSrc}
                  alt="icon-github"
                />
              </a>
            </div>
            <div className="linea__texto__contacto">
              <a
                href="https://www.linkedin.com/in/juan-david-caballero-barros-3239802a1"
                target="_blank"
              >
                LinkedIn
                <img
                  className="icon icon__img"
                  src={linkedInSrc}
                  alt="icon-linkedin"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
