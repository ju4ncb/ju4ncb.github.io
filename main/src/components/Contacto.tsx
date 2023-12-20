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
              Tecleo numeritos y letras y hago aplicaciones con eso, necesito
              chamba (LinkedIn actualmente vacio).
            </p>
            <div className="linea__texto__contacto">
              <i className="bi bi-telephone" />
              <p>+57 300 614 7044</p>
              <hr />
              <hr />
              <a href="https://github.com/ju4ncb" target="_blank">
                <i className="bi bi-github bi__link" />
              </a>
              <p>GitHub</p>
            </div>
            <div className="linea__texto__contacto">
              <i className="bi bi-envelope" />
              <p>ju4ncb@gmail.com</p>
              <hr />
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
