import { useState, useEffect } from "react";

function pythagorasTheorem(cat1: number, cat2: number) {
  return Math.sqrt(Math.pow(cat1, 2) + Math.pow(cat2, 2));
}

const Header = () => {
  const middleHeight = 560;
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  let cat = width * 0.5;
  let hi = pythagorasTheorem(width * 0.5, middleHeight * 0.7);
  let angle = Math.acos(cat / hi);
  angle = (angle * 360) / Math.PI / 2;

  return (
    <header id="seccion-inicio">
      <div className="greet__top" />
      <div className="greet__middle">
        <div
          className="header__text"
          style={{ transform: "rotate(" + angle + "deg)" }}
        >
          <img src="./public/icono-big-pf.png" className="logo__side" />
          <div className="text__side">
            <h1>ju4ncb</h1>
            <p>Bienvenido a mi portfolio!</p>
          </div>
        </div>
      </div>
      <div className="greet__bottom">
        <i className="bi bi-braces" />
        <i className="bi bi-code-slash" />
        <i className="bi bi-database-fill" />
        <i className="bi bi-clipboard2-data-fill" />
      </div>
    </header>
  );
};

export default Header;
