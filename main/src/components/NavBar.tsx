import { useState, useEffect } from "react";
import NavItem from "./NavItem";
import "../styles/NavBar.scss";
import { Menu } from "lucide-react";

const NavBar = () => {
  const [classes, setClasses] = useState("nav nav-color-1");
  const [activeLink, setActiveLink] = useState(1);
  const [open, setOpen] = useState(false);

  function determineClassBySection() {
    const sections = [
      { id: "seccion-inicio", color: "nav-color-1", link: 1 },
      { id: "seccion-contacto", color: "nav-color-2", link: 2 },
      { id: "seccion-conocimientos", color: "nav-color-3", link: 3 },
      { id: "seccion-proyectos", color: "nav-color-4", link: 4 },
    ];
    let found = false;
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i].id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 80) {
          setActiveLink(sections[i].link);
          setClasses(`nav ${sections[i].color}`);
          found = true;
          break;
        }
      }
    }
    if (!found) {
      setActiveLink(1);
      setClasses("nav nav-color-1");
    }
  }

  // Initial check to set the correct class and active link
  useEffect(() => {
    window.addEventListener("scroll", determineClassBySection);
    return () => window.removeEventListener("scroll", determineClassBySection);
  }, []);

  return (
    <ul className={open ? classes + " open" : classes}>
      <Menu
        className="nav-toggle"
        size={24}
        onClick={() => setOpen((prev) => !prev)}
      />
      <div className={open ? "nav-items open" : "nav-items"}>
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
      </div>
    </ul>
  );
};

export default NavBar;
