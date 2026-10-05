import { Sun, Moon } from "lucide-react";
import "./Header.css";
import "./Footer.css";

// Altura del navbar fijo — debe coincidir con el valor en Header.css (.navbar height: 4rem)
const NAVBAR_HEIGHT = 64; // px

/**
 * scrollToSection — desplaza suavemente a la sección indicada
 * compensando el offset del navbar fijo.
 * Respeta prefers-reduced-motion del sistema operativo.
 */
function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const top =
    target.getBoundingClientRect().top +
    window.scrollY -
    NAVBAR_HEIGHT;

  window.scrollTo({
    top,
    behavior: prefersReduced ? "auto" : "smooth",
  });
}

/**
 * handleNavClick — intercepta los clicks en los anchor links del menú
 * y delega a scrollToSection en lugar de dejar el comportamiento nativo.
 */
function handleNavClick(e) {
  const href = e.currentTarget.getAttribute("href");
  if (!href || !href.startsWith("#")) return;

  const id = href.slice(1); // quita el "#"
  if (!id) return; // href="#" → vuelve al top con scroll nativo

  e.preventDefault();
  scrollToSection(id);
}

// ============================================================
// Header — recibe `theme` y `onToggleTheme` desde App.jsx
// ============================================================

const Header = ({ theme, onToggleTheme }) => {
  const isDark = theme === "dark";

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo — scroll al top */}
        <a href="#" className="navbar-logo">
          AR.
        </a>

        {/* Menú de navegación */}
        <nav className="navbar-menu">
          <a href="#sobre-mi"    onClick={handleNavClick}>Sobre mí</a>
          <a href="#experiencia" onClick={handleNavClick}>Experiencia</a>
          <a href="#proyectos"   onClick={handleNavClick}>Proyectos</a>
          <a href="#habilidades" onClick={handleNavClick}>Habilidades</a>
          <a href="#contacto"    onClick={handleNavClick}>Contacto</a>
        </nav>

        {/* Acciones: toggle de tema + botón CTA */}
        <div className="navbar-actions">
          {/* Botón toggle oscuro/claro */}
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
            title={isDark ? "Tema claro" : "Tema oscuro"}
          >
            {isDark
              ? <Sun  size={16} strokeWidth={2} aria-hidden="true" />
              : <Moon size={16} strokeWidth={2} aria-hidden="true" />
            }
          </button>

          {/* CTA principal */}
          <a href="#contacto" className="navbar-button" onClick={handleNavClick}>
            Propuestas
          </a>
        </div>
      </div>
    </header>
  );
};

// ============================================================
// Footer
// ============================================================

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-container">
      <p>© 2026 Axel Romero. Todos los derechos reservados.</p>
      <p className="footer-description">
        Diseño minimalista &amp; responsivo
      </p>
    </div>
  </footer>
);

export { scrollToSection };
export default Header;
export { Footer };
