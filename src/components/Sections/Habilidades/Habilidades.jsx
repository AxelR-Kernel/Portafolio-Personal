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
// Monitor y Code2 de lucide-react para Windows y Visual Studio
// (no disponibles en la versión instalada de simple-icons)
import { Monitor, Code2 } from "lucide-react";

// ============================================================
// Datos del carrusel — 30 herramientas en 3 filas de 10
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

const fila1 = habilidades.slice(0, 10);
const fila2 = habilidades.slice(10, 20);
const fila3 = habilidades.slice(20, 30);

// ============================================================
// Datos de la tabla — cada categoría con sus chips
// ============================================================
const tablaHabilidades = [
  {
    categoria: "Frontend",
    items: [
      { id: "html5",  Icono: SiHtml5,      nombre: "HTML5" },
      { id: "css3",   Icono: SiCss,        nombre: "CSS3" },
      { id: "js",     Icono: SiJavascript, nombre: "JavaScript" },
      { id: "ts",     Icono: SiTypescript, nombre: "TypeScript" },
    ],
  },
  {
    categoria: "Backend",
    items: [
      { id: "java",   Icono: SiOpenjdk,    nombre: "Java" },
      { id: "python", Icono: SiPython,     nombre: "Python" },
      { id: "csharp", Icono: SiSharp,      nombre: "C#" },
      { id: "php",    Icono: SiPhp,        nombre: "PHP" },
      { id: "dotnet", Icono: SiDotnet,     nombre: ".NET" },
    ],
  },
  {
    categoria: "DataBase",
    items: [
      { id: "mysql",   Icono: SiMysql,   nombre: "MySQL" },
      { id: "mongodb", Icono: SiMongodb, nombre: "MongoDB" },
    ],
  },
  {
    categoria: "Frameworks / Librerías",
    items: [
      { id: "angular",   Icono: SiAngular,   nombre: "Angular" },
      { id: "react",     Icono: SiReact,     nombre: "React" },
      { id: "bootstrap", Icono: SiBootstrap, nombre: "Bootstrap" },
    ],
  },
  {
    categoria: "Control",
    items: [
      { id: "git",    Icono: SiGit,    nombre: "Git" },
      { id: "github", Icono: SiGithub, nombre: "GitHub" },
      { id: "docker", Icono: SiDocker, nombre: "Docker" },
    ],
  },
  {
    categoria: "Desarrollo",
    items: [
      { id: "vscode",   Icono: SiVscodium,       nombre: "VS Code" },
      { id: "vs",       Icono: Code2,             nombre: "Visual Studio" },
      { id: "postman",  Icono: SiPostman,         nombre: "Postman" },
      { id: "npm",      Icono: SiNpm,             nombre: "npm" },
      { id: "nodejs",   Icono: SiNodedotjs,       nombre: "Node.js" },
      { id: "android",  Icono: SiAndroidstudio,   nombre: "Android Studio" },
    ],
  },
  {
    categoria: "Diseño",
    items: [
      { id: "figma", Icono: SiFigma,  nombre: "Figma" },
      { id: "canva", Icono: SiCanvas, nombre: "Canva" },
    ],
  },
  {
    categoria: "SO",
    items: [
      { id: "windows",   Icono: Monitor,      nombre: "Windows" },
      { id: "ubuntu",    Icono: SiUbuntu,     nombre: "Ubuntu" },
      { id: "linuxmint", Icono: SiLinuxmint,  nombre: "Linux Mint" },
      { id: "macos",     Icono: SiApple,      nombre: "macOS" },
    ],
  },
  {
    categoria: "Extras",
    items: [
      { id: "blender",  Icono: SiBlender,  nombre: "Blender" },
      { id: "unity",    Icono: SiUnity,    nombre: "Unity" },
      { id: "obsidian", Icono: SiObsidian, nombre: "Obsidian" },
    ],
  },
];

// ============================================================
// Subcomponentes del carrusel
// ============================================================
const Chips = ({ items, prefix }) =>
  items.map((h) => (
    <div key={`${prefix}-${h.id}`} className="skill-chip" aria-label={h.nombre}>
      <h.Icono className="skill-icon" size={18} />
      <span className="skill-nombre">{h.nombre}</span>
    </div>
  ));

const FilaCarrusel = ({ items, rowIndex }) => {
  const reverso = rowIndex % 2 !== 0;
  const duraciones = [38, 44, 36];
  return (
    <div className={`carrusel-fila-wrapper${reverso ? " reverso" : ""}`}>
      <div
        className="carrusel-track"
        style={{ animationDuration: `${duraciones[rowIndex]}s` }}
        aria-label={`Fila ${rowIndex + 1} de habilidades`}
      >
        <div className="carrusel-grupo">
          <Chips items={items} prefix={`f${rowIndex}-a`} />
        </div>
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

    {/* Encabezado */}
    <div className="habilidades-header">
      <h2 className="habilidades-label">Habilidades</h2>
    </div>

    {/* Carrusel full-width */}
    <div className="carrusel-fullwidth">
      <div className="carrusel-mask">
        <FilaCarrusel items={fila1} rowIndex={0} />
        <FilaCarrusel items={fila2} rowIndex={1} />
        <FilaCarrusel items={fila3} rowIndex={2} />
      </div>
    </div>

    {/* Tabla de habilidades por categoría */}
    <div className="skills-table-wrapper">
      <table className="skills-table" aria-label="Tabla de habilidades por categoría">
        <thead>
          <tr>
            <th className="skills-th">Habilidad</th>
            <th className="skills-th">Herramientas</th>
          </tr>
        </thead>
        <tbody>
          {tablaHabilidades.map((fila) => (
            <tr key={fila.categoria} className="skills-tr">
              <td className="skills-td-cat">
                <span className="skills-cat-label">{fila.categoria}</span>
              </td>
              <td className="skills-td-items">
                <div className="skills-chips">
                  {fila.items.map((item) => (
                    <span key={item.id} className="skills-badge" title={item.nombre}>
                      <item.Icono className="skills-badge-icon" size={13} />
                      <span>{item.nombre}</span>
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  </section>
);

export default Habilidades;
