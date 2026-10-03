import { useState } from "react";
import "./Header.css";
import "./Footer.css";

// ============================================================
// Íconos SVG inline para sol (light) y luna (dark)
// ============================================================

const IconSun = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const IconMoon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

// ============================================================
// Header — recibe `theme` y `onToggleTheme` desde App.jsx
// ============================================================

const Header = ({ theme, onToggleTheme }) => {
  const isDark = theme === "dark";

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="#" className="navbar-logo">
          AR.
        </a>

        {/* Menú de navegación */}
        <nav className="navbar-menu">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contacto">Contacto</a>
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
            {isDark ? <IconSun /> : <IconMoon />}
          </button>

          {/* CTA principal */}
          <a href="#contacto" className="navbar-button">
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

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p>© 2026 Axel Romero. Todos los derechos reservados.</p>
        <p className="footer-description">
          Diseño minimalista &amp; responsivo
        </p>
      </div>
    </footer>
  );
};

export default Header;
export { Footer };
