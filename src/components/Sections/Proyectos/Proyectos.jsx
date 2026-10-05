import { useRef, useEffect, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import "./Proyectos.css";

// ============================================================
// Datos — 4 proyectos con repo de GitHub dedicado
// ============================================================
const proyectos = [
  {
    id: 1,
    titulo: "Sistema de Gestión de Empleados con Registro Biométrico",
    descripcion:
      "Aplicación de escritorio con autenticación por huella digital para automatizar el control de asistencia, eliminar registros manuales y generar reportes de puntualidad en tiempo real.",
    repo: "https://github.com/AxelRomero/sistema-biometrico",
    placeholder: "linear-gradient(135deg, #6c70e5 0%, #78a4f6 100%)",
    tag: "Desktop App",
  },
  {
    id: 2,
    titulo: "Plataforma Web de Agenda para Servicios y Transporte",
    descripcion:
      "Sistema web de agendamiento con base de datos optimizada mediante procedimientos almacenados y triggers, desarrollado en equipo durante el servicio social.",
    repo: "https://github.com/AxelR-Kernel/RMSG-Gestor",
    placeholder: "linear-gradient(135deg, #f7981a 0%, #fbbf24 100%)",
    tag: "Web App",
  },
  {
    id: 3,
    titulo: "Plataforma Web de Agenda y Análisis de Servicios",
    descripcion:
      "Aplicación web con módulo de reportes analíticos en tiempo real para la toma de decisiones. Incluye mantenimiento post-implementación y presentaciones técnicas periódicas.",
    repo: "https://github.com/AxelRomero/agenda-analytics",
    placeholder: "linear-gradient(135deg, #34d399 0%, #059669 100%)",
    tag: "Web App",
  },
  {
    id: 4,
    titulo: "Servidor NAS con Acceso Remoto Seguro",
    descripcion:
      "Infraestructura personal con Ubuntu Server, SSH y SFTP para almacenamiento y acceso remoto seguro a archivos desde cualquier dispositivo con disponibilidad continua del servicio.",
    repo: "https://github.com/AxelRomero/nas-server",
    placeholder: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)",
    tag: "Infraestructura",
  },
];

// ============================================================
// Tarjeta — <a> completo clickeable → GitHub
// ============================================================
const TarjetaProyecto = ({ proyecto }) => (
  <a
    className="proyecto-card"
    href={proyecto.repo}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Ver repositorio de ${proyecto.titulo}`}
    draggable="false"
  >
    <div
      className="proyecto-img"
      style={{ background: proyecto.placeholder }}
      aria-hidden="true"
    >
      <span className="proyecto-tag">{proyecto.tag}</span>
    </div>
    <div className="proyecto-body">
      <h3 className="proyecto-titulo">{proyecto.titulo}</h3>
      <p className="proyecto-descripcion">{proyecto.descripcion}</p>
      <span className="proyecto-link">
        <span>Ver más</span>
        <ArrowRight size={13} strokeWidth={2} aria-hidden="true" />
      </span>
    </div>
  </a>
);

// ============================================================
// Carrusel — loop JS con requestAnimationFrame
//
// Un único offset acumula:
//   • El auto-scroll continuo (velocidad BASE_SPEED px/frame)
//   • El arrastre con mouse (delta acumulado mientras se arrastra)
//   • El arrastre con inercia (velocidad residual al soltar)
//
// El loop normaliza el offset cada frame para que nunca salga
// de [0, halfWidth), produciendo el loop sin saltos.
// El separador ::after en .proyectos-grupo marca visualmente
// dónde termina una copia y empieza la otra.
// ============================================================
const BASE_SPEED    = 0.55;   // px por frame (~33fps = ~18px/s)
const FRICTION      = 0.92;   // deceleración de la inercia
const MIN_VELOCITY  = 0.15;   // velocidad mínima antes de frenar
const AUTOPLAY_MS   = 3800;   // intervalo autoplay mobile (ms)

const CarruselProyectos = () => {
  const trackRef       = useRef(null);
  const rafId          = useRef(null);

  // Estado del loop — todo en refs para no causar re-renders
  const offset         = useRef(0);       // posición actual en px (positivo = avanza izq.)
  const velocity       = useRef(0);       // inercia al soltar el drag
  const isDragging     = useRef(false);
  const hasDragged     = useRef(false);
  const lastMouseX     = useRef(0);
  const prevMouseX     = useRef(0);
  const autoScrolling  = useRef(true);    // false mientras el usuario arrastra / hay inercia

  // Mobile autoplay
  const autoplayRef    = useRef(null);
  const interactRef    = useRef(null);

  // ── Loop principal ──────────────────────────────────────
  const loop = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const halfWidth = track.scrollWidth / 2;
    if (halfWidth <= 0) { rafId.current = requestAnimationFrame(loop); return; }

    if (isDragging.current) {
      // Durante el drag: la posición ya la actualiza onMouseMove
      // solo normalizamos el offset
    } else if (Math.abs(velocity.current) > MIN_VELOCITY) {
      // Inercia post-drag
      offset.current += velocity.current;
      velocity.current *= FRICTION;
      if (Math.abs(velocity.current) <= MIN_VELOCITY) {
        velocity.current = 0;
        autoScrolling.current = true;
      }
    } else if (autoScrolling.current) {
      // Auto-scroll continuo
      offset.current += BASE_SPEED;
    }

    // Normalizar en [0, halfWidth) → loop invisible
    offset.current = ((offset.current % halfWidth) + halfWidth) % halfWidth;

    track.style.transform = `translateX(${-offset.current}px)`;
    rafId.current = requestAnimationFrame(loop);
  }, []);

  // Arrancar el loop al montar
  useEffect(() => {
    rafId.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId.current);
  }, [loop]);

  // ── Autoplay mobile ──────────────────────────────────────
  const stopAutoplay = useCallback(() => {
    clearInterval(autoplayRef.current);
    clearTimeout(interactRef.current);
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    if (!window.matchMedia("(max-width: 640px)").matches) return;
    autoplayRef.current = setInterval(() => {
      const track = trackRef.current;
      if (!track) return;
      const card = track.querySelector(".proyecto-card");
      if (!card) return;
      // Empuja la inercia en la dirección del auto-scroll
      velocity.current = (card.offsetWidth + 20) / 40;
      autoScrolling.current = false;
    }, AUTOPLAY_MS);
  }, [stopAutoplay]);

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [startAutoplay, stopAutoplay]);

  const onUserInteract = useCallback(() => {
    stopAutoplay();
    clearTimeout(interactRef.current);
    interactRef.current = setTimeout(startAutoplay, AUTOPLAY_MS * 2);
  }, [stopAutoplay, startAutoplay]);

  // ── Drag con mouse ───────────────────────────────────────
  const onMouseDown = useCallback((e) => {
    if (e.button !== 0) return;
    isDragging.current    = true;
    hasDragged.current    = false;
    autoScrolling.current = false;
    velocity.current      = 0;
    lastMouseX.current    = e.clientX;
    prevMouseX.current    = e.clientX;
    onUserInteract();
  }, [onUserInteract]);

  const onMouseMove = useCallback((e) => {
    if (!isDragging.current) return;
    const dx = lastMouseX.current - e.clientX; // positivo = arrastra izquierda
    if (Math.abs(e.clientX - prevMouseX.current) > 3) hasDragged.current = true;

    // Acumular velocidad para la inercia (promedio últimos 2 frames)
    velocity.current = (velocity.current + dx) / 2;

    const track     = trackRef.current;
    const halfWidth = track.scrollWidth / 2;
    offset.current  = ((offset.current + dx) % halfWidth + halfWidth) % halfWidth;

    prevMouseX.current = lastMouseX.current;
    lastMouseX.current = e.clientX;
  }, []);

  const onDragEnd = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;
    // La inercia la gestiona el loop; cuando se agote vuelve el auto-scroll
  }, []);

  // Bloquea click si hubo arrastre real
  const onClickCapture = useCallback((e) => {
    if (hasDragged.current) {
      e.preventDefault();
      e.stopPropagation();
      hasDragged.current = false;
    }
  }, []);

  const onTouchStart = useCallback(() => onUserInteract(), [onUserInteract]);

  return (
    <div className="proyectos-carrusel-outer">
      <div className="proyectos-carrusel-mask">
        <div
          className="proyectos-carrusel-track"
          ref={trackRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          onClickCapture={onClickCapture}
          onTouchStart={onTouchStart}
          aria-label="Carrusel de proyectos"
          role="region"
        >
          {/* Grupo A — original */}
          <div className="proyectos-grupo">
            {proyectos.map((p) => (
              <TarjetaProyecto key={`a-${p.id}`} proyecto={p} />
            ))}
          </div>
          {/* Grupo B — duplicado para el loop */}
          <div className="proyectos-grupo">
            {proyectos.map((p) => (
              <TarjetaProyecto key={`b-${p.id}`} proyecto={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================
// Sección principal
// ============================================================
const Proyectos = () => (
  <section id="proyectos" className="proyectos-section">
    <div className="proyectos-grid">
      <div className="proyectos-label-col">
        <h2 className="proyectos-label">Proyectos</h2>
      </div>
      <div className="proyectos-intro">
        <p className="proyectos-descripcion">
          Selección de proyectos desarrollados de inicio a fin, desde la
          conceptualización hasta el despliegue.
        </p>
      </div>
    </div>
    <CarruselProyectos />
  </section>
);

export default Proyectos;
