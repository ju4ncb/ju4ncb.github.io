import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id: number;
  idActivo: number;
  onActivo: (item: number) => void;
}

const Conocimiento = ({ children, id, idActivo, onActivo }: Props) => {
  function esActivo() {
    let clase = "conocimiento";
    if (id == idActivo) {
      clase += " conocimiento__active";
    }
    return clase;
  }
  return (
    <div className={esActivo()} onClick={() => onActivo(id)}>
      {children}
    </div>
  );
};

export default Conocimiento;
