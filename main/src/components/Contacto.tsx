const Contacto = () => {
  return (
    <section id="seccion-contacto">
      <div className="triangulo__superior__contacto">
        <h2>CONTACTO</h2>
      </div>
      <div className="seccion__contacto">
        <div className="caja__contacto">
          <div className="caja__texto__contacto">
            <h3>Acerca de mí</h3>
            <p>
              Estudiante de ingeniería de sistemas, fullstack web dev y analista
              de datos.
            </p>
            <div className="linea__texto__contacto">
              <a href="https://github.com/ju4ncb" target="_blank">
                <i className="bi bi-github bi__link" />
              </a>
              <p>GitHub</p>
            </div>
            <div className="linea__texto__contacto">
              <a
                href="https://www.linkedin.com/in/juan-david-caballero-barros-3239802a1"
                target="_blank"
              >
                <i className="bi bi-linkedin bi__link" />
              </a>
              <p>LinkedIn</p>
            </div>
          </div>
          <div className="contenedor__imagen__contacto">
            <div className="imagen__contacto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
