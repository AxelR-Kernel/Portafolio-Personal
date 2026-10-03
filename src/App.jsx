import { useState } from "react";
import "./App.css";
import MainLayout from "./components/MainLayout";
import Header, { Footer } from "./components/Navbar/Navbar";
import Introduccion from "./components/Sections/Introduccion/Introduccion";
import SobreMi from "./components/Sections/SobreMi/SobreMi";
import Experiencia from "./components/Sections/Experiencia/Experiencia";
import Proyectos from "./components/Sections/Proyectos/Proyectos";
import Habilidades from "./components/Sections/Habilidades/Habilidades";
import Contacto from "./components/Sections/Contacto/Contacto";

function App() {
  // Estado del tema: "light" por defecto
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    // La clase "dark" o "light" en este div activa las variables CSS del tema
    <div className={theme}>
      <MainLayout>
        {/* Encabezado con barra de navegación y botón de tema */}
        <Header theme={theme} onToggleTheme={toggleTheme} />

        {/* Secciones principales */}
        <Introduccion />
        <SobreMi />
        <Experiencia />
        <Proyectos />
        <Habilidades />
        <Contacto />

        {/* Footer */}
        <Footer />
      </MainLayout>
    </div>
  );
}

export default App;
