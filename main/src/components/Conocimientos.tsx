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
            <article style={{ flex: 2.5 }}>
              <p>
                Uno de mis pasatiempos favoritos, conocimientos de programación
                orientada a objetos, programación funcional, análisis de datos,
                análisis de algoritmos, estructuras de datos e interfaces.
              </p>
            </article>
            <article
              className="titulo__descripcion__conocimientos"
              style={{ flex: 1 }}
            >
              <h2>Lenguajes de programación</h2>
              <div className="separador__descripcion__conocimientos" />
            </article>
            <div
              style={{
                flex: 5,
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <div className="python__descripcion__conocimientos">
                <p style={{ fontSize: "26px", fontWeight: 600 }}>Python</p>
                <p style={{ fontSize: "16px" }}>
                  Librerias: Numpy, matplotlib, xarray, pandas.
                </p>
                <p style={{ fontSize: "16px" }}>
                  Frameworks: PyQT, flask, TKinter.
                </p>
              </div>
              <div className="java__descripcion__conocimientos">
                <p style={{ fontSize: "26px", fontWeight: 600 }}>Java</p>
                <p style={{ fontSize: "16px" }}>Librerias: JavaFX.</p>
              </div>
              <div className="js__descripcion__conocimientos">
                <p style={{ fontSize: "26px", fontWeight: 600 }}>Python</p>
                <p style={{ fontSize: "16px" }}>Librerias: React, BootStrap.</p>
                <p style={{ fontSize: "16px" }}>
                  Frameworks: Angular, Electron.
                </p>
              </div>
            </div>
          </div>
          <div className="seccion__descripcion__conocimientos">
            <p>Balls</p>
          </div>
          <div className="seccion__descripcion__conocimientos">
            <p>B</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conocimientos;
