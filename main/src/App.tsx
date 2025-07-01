import Conocimientos from "./components/Conocimientos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import NavBar from "./components/NavBar";
import Proyectos from "./components/Proyectos";
import "./styles/App.scss";

function App() {
  return (
    <>
      <NavBar />
      <Inicio />
      <main>
        <Contacto />
        <Conocimientos />
        <Proyectos />
        <Footer />
      </main>
    </>
  );
}

export default App;
