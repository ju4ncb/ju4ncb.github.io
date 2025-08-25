import githubSrc from "../assets/github.svg";
import linkedInSrc from "../assets/linkedin.svg";
import telephoneSrc from "../assets/telephone.svg";
import envelopeSrc from "../assets/envelope.svg";
import { useForm } from "react-hook-form";
import "../styles/Contacto.scss";
import { useState } from "react";

const Contacto = () => {
  type ResponseStatus = "idle" | "sending" | "success" | "error";

  const [responseStatus, setResponseStatus] = useState<ResponseStatus>("idle");

  const onSubmit = async (data: any) => {
    try {
      setResponseStatus("sending");
      const response = await fetch("https://formspree.io/f/mwpbywpd", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          message: data.message,
        }),
      });
      if (response.ok) {
        setResponseStatus("success");
      } else {
        setResponseStatus("error");
      }
    } catch (error) {
      setResponseStatus("error");
      console.log(error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
                Soy un estudiante bilingüe (inglés y español) de Ingeniería de
                Sistemas, actualmente en 8vo semestre. Tengo experiencia en
                desarrollo web Fullstack y móvil, bases de datos, programación
                orientada a objetos, Cloud Computing, metodologías ágiles y
                arquitectura de software.
              </p>
              <p>
                Me apasiona aprender nuevas tecnologías y perfeccionar mis
                habilidades constantemente. Busco oportunidades para aplicar mis
                conocimientos en proyectos reales, aportar valor y seguir
                creciendo profesionalmente en el mundo de la tecnología.
              </p>
            </div>
            <div className="contenedor__imagen__contacto">
              <div className="imagen__contacto" />
            </div>
          </div>
          <div className="informacion__contacto">
            <div className="linea__texto__contacto">
              <a href="https://github.com/ju4ncb" target="_blank">
                <img
                  className="icon icon__img"
                  src={githubSrc}
                  alt="icon-github"
                />
                GitHub
              </a>
            </div>
            <div className="linea__texto__contacto">
              <a
                href="https://www.linkedin.com/in/juan-david-caballero-barros-3239802a1"
                target="_blank"
              >
                <img
                  className="icon icon__img"
                  src={linkedInSrc}
                  alt="icon-linkedin"
                />
                LinkedIn
              </a>
            </div>
            <div className="linea__texto__contacto">
              <a href="tel:+573006147044">
                <img
                  className="icon icon__img"
                  src={telephoneSrc}
                  alt="icon-telephone"
                />
                +57 300 614 70 44
              </a>
            </div>
            <div className="linea__texto__contacto">
              <a href="mailto:ju4ncb@gmail.com">
                <img
                  className="icon icon__img"
                  src={envelopeSrc}
                  alt="icon-envelope"
                />
                ju4ncb@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <form className="form-contact" onSubmit={handleSubmit(onSubmit)}>
        <h2>Envíame un correo!</h2>
        <div className="form-input-container">
          <label htmlFor="email">Tu correo electrónico</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "El correo es obligatorio" })}
          />
          {typeof errors.email?.message === "string" && (
            <span>{errors.email.message}</span>
          )}
        </div>
        <div className="form-input-container">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            maxLength={1000}
            {...register("message", {
              required: "El mensaje es obligatorio",
              maxLength: {
                value: 1000,
                message: "El mensaje no puede superar los 1000 caracteres",
              },
            })}
            rows={4}
            style={{ resize: "none", overflow: "hidden" }}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = "auto";
              target.style.height = `${target.scrollHeight}px`;
            }}
          />
          {typeof errors.message?.message === "string" && (
            <span>{errors.message.message}</span>
          )}
        </div>
        {responseStatus === "sending" && <div className="form-loading" />}
        {responseStatus === "success" && (
          <div className="form-success-message">
            ¡Mensaje enviado correctamente!
          </div>
        )}
        {responseStatus === "error" && (
          <div className="form-error-message">
            Ocurrió un error al enviar el mensaje. Intenta nuevamente.
          </div>
        )}
        <button type="submit">ENVIAR</button>
      </form>
    </section>
  );
};

export default Contacto;
