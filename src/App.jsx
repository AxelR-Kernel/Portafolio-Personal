import "./App.css";
import MainLayout from "./components/MainLayout";
import Header, { Footer } from "./components/Navbar/navbar";
import SobreMi from "./components/Sections/SobreMi/SobreMi";
import Introduccion from "./components/Sections/Introduccion/Introduccion";

function App() {
  return (
    <MainLayout>
      {/* Encabezado con barra de navegación */}
      <Header />

      {/* Sección de introducción */}
      <Introduccion />

      {/* Sección Sobre mí */}
      <SobreMi />

      {/* Sección Experiencia */}
      <section id="experiencia" className="py-16 border-t border-slate-800/60">
        <h2 className="text-2xl font-bold text-white mb-4">Experiencia</h2>
        <p className="text-slate-400 leading-relaxed">
          Aquí se detallara una linea de tiempo con roles anteriores, proyectos
          clave y responsabilidades técnicas.
        </p>
      </section>

      {/* Sección Proyectos */}
      <section id="proyectos" className="py-16 border-t border-slate-800/60">
        <h2 className="text-2xl font-bold text-white mb-4">Proyectos</h2>
        <p className="text-slate-400 leading-relaxed">
          Detalles especificos de cada proyecto, incluyendo descripción,
          tecnologías utilizadas y resultados obtenidos.
        </p>
      </section>

      {/* Sección Habilidades */}
      <section id="habilidades" className="py-16 border-t border-slate-800/60">
        <h2 className="text-2xl font-bold text-white mb-4">Habilidades</h2>
        <p className="text-slate-400 leading-relaxed">
          Listadi de tecnologías, frameworks y herramientas (React, Git, bases
          de datos, etc.).
        </p>
      </section>

      {/* Sección Contacto */}
      <section id="contacto" className="py-16 border-t border-slate-800/60">
        <h2 className="text-2xl font-bold text-white mb-4">Contacto</h2>
        <p className="text-slate-400 leading-relaxed">
          Medios de comunicación, enlaces al perfil profesional.
        </p>
      </section>

      {/* Footer */}
      <Footer />
    </MainLayout>
  );
}

export default App;
