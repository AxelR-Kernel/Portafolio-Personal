import "./Habilidades.css";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiOpenjdk,
  SiPython,
  SiSharp,
  SiPhp,
  SiDotnet,
  SiMysql,
  SiMongodb,
  SiAngular,
  SiReact,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiDocker,
  SiVscodium,
  SiPostman,
  SiNpm,
  SiNodedotjs,
  SiAndroidstudio,
  SiFigma,
  SiCanvas,
  SiUbuntu,
  SiLinuxmint,
  SiApple,
  SiBlender,
  SiUnity,
  SiObsidian,
} from "@icons-pack/react-simple-icons";

// ============================================================
// Lista completa de habilidades
// ============================================================
const habilidades = [
  { id: "html5",     Icono: SiHtml5,         nombre: "HTML5" },
  { id: "css3",      Icono: SiCss,           nombre: "CSS3" },
  { id: "js",        Icono: SiJavascript,    nombre: "JavaScript" },
  { id: "ts",        Icono: SiTypescript,    nombre: "TypeScript" },
  { id: "java",      Icono: SiOpenjdk,       nombre: "Java" },
  { id: "python",    Icono: SiPython,        nombre: "Python" },
  { id: "csharp",    Icono: SiSharp,         nombre: "C#" },
  { id: "php",       Icono: SiPhp,           nombre: "PHP" },
  { id: "dotnet",    Icono: SiDotnet,        nombre: ".NET" },
  { id: "mysql",     Icono: SiMysql,         nombre: "MySQL" },
  { id: "mongodb",   Icono: SiMongodb,       nombre: "MongoDB" },
  { id: "angular",   Icono: SiAngular,       nombre: "Angular" },
  { id: "react",     Icono: SiReact,         nombre: "React" },
  { id: "bootstrap", Icono: SiBootstrap,     nombre: "Bootstrap" },
  { id: "git",       Icono: SiGit,           nombre: "Git" },
  { id: "github",    Icono: SiGithub,        nombre: "GitHub" },
  { id: "docker",    Icono: SiDocker,        nombre: "Docker" },
  { id: "vscode",    Icono: SiVscodium,      nombre: "VS Code" },
  { id: "postman",   Icono: SiPostman,       nombre: "Postman" },
  { id: "npm",       Icono: SiNpm,           nombre: "npm" },
  { id: "nodejs",    Icono: SiNodedotjs,     nombre: "Node.js" },
  { id: "android",   Icono: SiAndroidstudio, nombre: "Android Studio" },
  { id: "figma",     Icono: SiFigma,         nombre: "Figma" },
  { id: "canva",     Icono: SiCanvas,        nombre: "Canva" },
  { id: "ubuntu",    Icono: SiUbuntu,        nombre: "Ubuntu" },
  { id: "linuxmint", Icono: SiLinuxmint,     nombre: "Linux Mint" },
  { id: "macos",     Icono: SiApple,         nombre: "macOS" },
  { id: "blender",   Icono: SiBlender,       nombre: "Blender" },
  { id: "unity",     Icono: SiUnity,         nombre: "Unity" },
  { id: "obsidian",  Icono: SiObsidian,      nombre: "Obsidian" },
];

// Divide la lista en 3 filas distribuidas uniformemente
const fila1 = habilidades.slice(0, 10);
const fila2 = habilidades.slice(10, 20);
const fila3 = habilidades.slice(20, 30);

// Renderiza los chips de una fila con su prefijo de key
const Chips = ({ items, prefix }) =>
  items.map((h) => (
    <div key={`${prefix}-${h.id}`} className="skill-chip" aria-label={h.nombre}>
      <h.Icono className="skill-icon" size={18} />
      <span className="skill-nombre">{h.nombre}</span>
    </div>
  ));

// ============================================================
// Fila de carrusel individual
//
// Estructura del track: [A1 A2 ... An] [B1 B2 ... Bn]
// — exactamente dos copias idénticas, sin nada entre ellas.
// — la animación desplaza translateX(-50%), que equivale
//   al ancho exacto de UNA copia → reset invisible.
//
// El separador visual se implementa como ::after en el
// wrapper de cada grupo, fuera del flujo de scroll.
// ============================================================
const FilaCarrusel = ({ items, rowIndex }) => {
  const reverso = rowIndex % 2 !== 0;
  const duraciones = [38, 44, 36];
  const duracion = duraciones[rowIndex];

  return (
    <div className={`carrusel-fila-wrapper${reverso ? " reverso" : ""}`}>
      <div
        className="carrusel-track"
        style={{ animationDuration: `${duracion}s` }}
        aria-label={`Fila ${rowIndex + 1} de habilidades`}
      >
        {/*
         * Grupo A — primera copia.
         * El separador aparece como ::after de este div,
         * posicionado absolutamente para no afectar el ancho
         * del track ni el punto de reset de la animación.
         */}
        <div className="carrusel-grupo">
          <Chips items={items} prefix={`f${rowIndex}-a`} />
        </div>

        {/* Grupo B — segunda copia idéntica */}
        <div className="carrusel-grupo">
          <Chips items={items} prefix={`f${rowIndex}-b`} />
        </div>
      </div>
    </div>
  );
};

// ============================================================
// Componente principal
// ============================================================
const Habilidades = () => (
  <section id="habilidades" className="habilidades-section">

    {/* Encabezado de sección — dentro del ancho del layout normal */}
    <div className="habilidades-header">
      <h2 className="habilidades-label">Habilidades</h2>
    </div>

    {/* Carrusel full-width — rompe el padding del layout */}
    <div className="carrusel-fullwidth">
      {/* Máscara de difuminado en los extremos izquierdo y derecho */}
      <div className="carrusel-mask">
        <FilaCarrusel items={fila1} rowIndex={0} />
        <FilaCarrusel items={fila2} rowIndex={1} />
        <FilaCarrusel items={fila3} rowIndex={2} />
      </div>
    </div>

  </section>
);

export default Habilidades;
