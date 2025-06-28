import { useState, useEffect } from "react";
import iconBig from "../assets/icono-big-pf.png";
import "../styles/Header.scss";
import { Braces, ClipboardList, Code2, Database } from "lucide-react";

function pythagorasTheorem(cat1: number, cat2: number) {
  return Math.sqrt(Math.pow(cat1, 2) + Math.pow(cat2, 2));
}

const Header = () => {
  const middleHeight = window.innerHeight - 40;
  const [width, setWidth] = useState(window.innerWidth);
  const [angle, setAngle] = useState(0);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function calculateAngle() {
      let cat = width * 0.5;
      let hi = pythagorasTheorem(width * 0.5, middleHeight * 0.7);
      let angle = Math.acos(cat / hi);
      if (width < 700) {
        return 0;
      }
      return (angle * 360) / Math.PI / 2;
    }
    setAngle(calculateAngle());
  }, [width]);

  return (
    <header id="seccion-inicio">
      <div className="greet__img" />
      <div className="greet__middle">
        <div
          className="header__text"
          style={{ transform: "rotate(" + angle + "deg)" }}
        >
          <img src={iconBig} className="logo__side" />
          <div className="text__side">
            <h1>ju4ncb</h1>
            <p>Bienvenido a mi portafolio!</p>
          </div>
        </div>
      </div>
      <div className="greet__bottom">
        <Braces size={32} className="greet__icon" />
        <Code2 size={32} className="greet__icon" />
        <Database size={32} className="greet__icon" />
        <ClipboardList size={32} className="greet__icon" />
      </div>
    </header>
  );
};

export default Header;
