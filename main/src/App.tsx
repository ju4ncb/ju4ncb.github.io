import Conocimientos from "./components/Conocimientos";
import Contacto from "./components/Contacto";
import Inicio from "./components/Inicio";
import NavBar from "./components/NavBar";
import Proyectos from "./components/Proyectos";

function App() {
  return (
    <>
      <NavBar />
      <Inicio />
      <main>
        <Contacto />
        <Conocimientos />
        <Proyectos />
      </main>
    </>
  );
}

export default App;
