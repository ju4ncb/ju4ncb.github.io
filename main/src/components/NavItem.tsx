import { ReactNode } from "react";

const sections = ["inicio", "contacto", "conocimientos", "proyectos"];

interface Props {
  isActive: boolean;
  activeNumber: number;
  children: ReactNode;
}

const NavItem = ({ isActive, activeNumber, children }: Props) => {
  return (
    <a
      className={isActive ? "nav-link active" : "nav-link"}
      href={"#seccion-" + sections[activeNumber - 1]}
    >
      {children}
    </a>
  );
};

export default NavItem;
