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
            Aqui se supone q va otro componente dependiendo de la opcion q se
            elija, pero no me he decidido aun de q la veda.
          </p>
          <h2>Lista de crimenes:</h2>
          <p>
            Contacto sexual abusivo, Abogar por el derrocamiento del gobierno,
            Asalto/Agresión Agravada, Robo de identidad agravado, Abuso Sexual
            Agravado, Apuntar con un puntero láser a un avión, Secuestro de
            aviones, Lucha contra el crimen organizado, Antimonopolio, Robo a
            mano armada, Incendio provocado, Asesinato, Ser fan de monogatari,
            Asalto con un arma mortal, Agredir o matar a un oficial federal,
            Ayudar o instigar a escapar, Intento de cometer asesinato/homicidio
            involuntario, Robo a un banco, Fraude de bancarrota/malversación de
            fondos, Hurto bancario, Atraco a un banco, Chantaje, Bombardeo
          </p>
        </div>
      </div>
    </section>
  );
};

export default Conocimientos;
