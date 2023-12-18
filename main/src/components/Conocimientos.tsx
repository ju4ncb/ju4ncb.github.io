import { useState } from "react";
import Conocimiento from "./Conocimiento";

const Conocimientos = () => {
  const [activo, setActivo] = useState(1);
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
            onActivo={(id) => setActivo(id)}
          >
            <i className="bi bi-terminal" />
            <p>Programación</p>
          </Conocimiento>
          <Conocimiento
            id={2}
            idActivo={activo}
            onActivo={(id) => setActivo(id)}
          >
            <i className="bi bi-database" />
            <p>Bases de datos</p>
          </Conocimiento>
          <Conocimiento
            id={3}
            idActivo={activo}
            onActivo={(id) => setActivo(id)}
          >
            <i
              className="bi bi-code-slash"
              style={{ transform: "translateY(-15%)" }}
            />
            <p>Desarrollo web</p>
          </Conocimiento>
        </div>
        <div className="descripcion__conocimientos">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At velit,
            ullam dolore facilis sequi reiciendis dolorem voluptatum illo quasi
            et ut rem, repudiandae ipsam. Dignissimos sint quis voluptates
            laboriosam pariatur?, como que se supone q va texto e imagenes pero
            la plena me dio pava llenar eso ahora mismo xdddd
          </p>
        </div>
      </div>

      <button type="button" className="btn btn-secondary">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
        fugiat veniam maxime a, iusto expedita alias rerum quidem consectetur
        accusantium in voluptatibus reprehenderit corrupti culpa tempore maiores
        cum corporis repudiandae.
      </button>
    </section>
  );
};

export default Conocimientos;
