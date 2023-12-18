import { useState, useEffect } from "react";
import NavItem from "./NavItem";

const NavBar = () => {
  let fixed = false;
  let notRunning = true;
  function determineClass(scroll: number) {
    console.log(scroll);
    if (notRunning) {
      if (scroll > 100) {
        fixed = true;
        setClasses("nav nav-tabs nav--fixed");
      } else {
        if (fixed) {
          fixed = false;
          notRunning = false;
          setClasses("nav nav-tabs nav--fixed nav--slide-out");
          setTimeout(() => {
            notRunning = true;
            setClasses("nav nav-tabs nav--top");
          }, 300);
        }
      }
    }
    if (scroll < 550) {
      //currently in home section
      setActiveLink(1);
    } else if (scroll < 1100) {
      //currently in contact section
      setActiveLink(2);
    } else if (scroll < 1600) {
      setActiveLink(3);
    } else{
      setActiveLink(4);
    }
  }
  const [classes, setClasses] = useState("nav nav-tabs nav--top");
  const [activeLink, setActiveLink] = useState(1);
  useEffect(() => {
    function handleScrollPos() {
      determineClass(window.scrollY);
    }
    window.addEventListener("scroll", handleScrollPos);
    return () => window.removeEventListener("scroll", handleScrollPos);
  }, []);
  return (
    <ul className={classes}>
      <li className="nav-item">
        <NavItem activeNumber={1} isActive={activeLink == 1}>
          Inicio
        </NavItem>
      </li>
      <li className="nav-item">
        <NavItem activeNumber={2} isActive={activeLink == 2}>
          Contacto
        </NavItem>
      </li>
      <li className="nav-item">
        <NavItem activeNumber={3} isActive={activeLink == 3}>
          Conocimientos
        </NavItem>
      </li>
      <li className="nav-item">
        <NavItem activeNumber={4} isActive={activeLink == 4}>
          Proyectos
        </NavItem>
      </li>
    </ul>
  );
};

export default NavBar;
