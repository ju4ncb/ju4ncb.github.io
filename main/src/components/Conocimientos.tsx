import { useState } from "react";
import Conocimiento from "./Conocimiento";

const Conocimientos = () => {
  const [activo, setActivo] = useState(1);
  function handleClick(id: number) {
    setActivo(id);
    const element = document.getElementById("descripcionConocimientos");
    if (element) {
      element.style.transform = "translateY(-" + (id - 1) * 33.33 + "%)";
    }
    console.log(element?.style.transform);
  }
  return (
    <section id="seccion-conocimientos">
      <div className="titulo__conocimientos">
        <h2>CONOCIMIENTOS</h2>
      </div>
      <div className="caja__conocimientos">
        <div className="conocimientos">
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
              className="lenguajes__descripcion__conocimientos"
              style={{ flex: 5 }}
            >
              <div className="python__descripcion__conocimientos">
                <div className="imagen" />
                <p style={{ fontSize: "26px", fontWeight: 600 }}>Python</p>
                <p style={{ fontSize: "16px" }}>
                  Librerias: Numpy, matplotlib, xarray, pandas.
                </p>
                <p style={{ fontSize: "16px" }}>
                  Frameworks: PyQT, flask, TKinter.
                </p>
              </div>
              <div className="java__descripcion__conocimientos">
                <div className="imagen" />
                <p style={{ fontSize: "26px", fontWeight: 600 }}>Java</p>
                <p style={{ fontSize: "16px" }}>Librerias: JavaFX.</p>
              </div>
              <div className="js__descripcion__conocimientos">
                <div className="imagen" />
                <p style={{ fontSize: "26px", fontWeight: 600 }}>JS</p>
                <p style={{ fontSize: "16px" }}>Librerias: React, BootStrap.</p>
                <p style={{ fontSize: "16px" }}>
                  Frameworks: Angular, Electron.
                </p>
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
            <article
              style={{
                flex: 5,
                padding: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  animation: "glow__separador 8s ease infinite",
                  height: "80%",
                  borderRadius: 6,
                }}
              >
                <div
                  className="db__descripcion__conocimientos"
                  style={{
                    flex: 1,
                    borderRight: "none",
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                >
                  <div className="mysql__descripcion__conocimientos">
                    <div className="imagen" />
                  </div>
                  <h3>MySQL</h3>
                </div>
                <div
                  className="card db__descripcion__conocimientos"
                  style={{
                    flex: 1,
                    borderRight: "none",
                    borderLeft: "none",
                    borderRadius: 0,
                  }}
                >
                  <div className="osql__descripcion__conocimientos">
                    <div className="imagen" />
                  </div>
                  <h3>Oracle SQL</h3>
                </div>
                <div
                  className="card db__descripcion__conocimientos"
                  style={{
                    flex: 1,
                    borderLeft: "none",
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                  }}
                >
                  <div className="sql3__descripcion__conocimientos">
                    <div className="imagen" />
                  </div>
                  <h3>SQLite3</h3>
                </div>
              </div>
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
              <p>
                Please please please let me let me let me let me get what i want
                this time
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conocimientos;
