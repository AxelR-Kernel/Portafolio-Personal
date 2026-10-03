import { useEffect, useRef } from "react";
import "./StarModel.css";

// ============================================================
// Contenido ASCII del bot — separado para no ensuciar el JSX
// ============================================================

const BOT_BODY_ASCII = `                        ##########################################
               ############################################################
          ######################################################################
       ##################                                   #######################
     ###########                                                    #################
    #########                                                           ##############
   ########                                                               #############
  ########                                                                 #############
  #######                                                                   ############
 #######                                                                    #############
 #######                                                                     ############
 #######                                                                     ############
#######                                                                      #############
#######                                                                      #############
#######                                                                      #############
#######                                                                      #############
#######                                                                      #############
#######                                                                      #############
#######                                                                      #############
#######                                                                      #############
#######                                                                      #############
########                                                                     #############
########                                                                    ##############
 ########                                                                   #############
 ########                                                                  ##############
 #########                                                                ###############
  #########                                                              ###############
  ############                                                         #################
   ################                                               #####################
    ###########################                       ################################
     ################################################################################
       ############################################################################
          #####################################################################
               ############################################################
                     #################################################
                         #########################################
                              ###############################
                                     #####################
                                    #################
                                  ################
                                #############
                               #########
                             ######
                            ###`;

const BOT_STAR_ASCII = `            *
           ***
          *****
        ********
     **************
   ******************
************************
   ******************
     **************
        ********
          *****
           ***
            *`;

const EYE_LEFT_ASCII = `  ######
 ########
#######°°°
######°°°°
#######°°°
##########
##########
##########
##########
##########
 ########
  ######`;

const EYE_RIGHT_ASCII = `  ######
 ########
#######°°°
######°°°°
#######°°°
##########
##########
##########
##########
##########
 ########
  ######`;

// ============================================================
// Componente StarModel
// ============================================================

const StarModel = () => {
  const botRef = useRef(null);
  const botBodyRef = useRef(null);
  const botStarRef = useRef(null);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const matrixRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    const bot = botRef.current;
    const botBody = botBodyRef.current;
    const botStar = botStarRef.current;
    const leftEye = leftEyeRef.current;
    const rightEye = rightEyeRef.current;
    const matrix = matrixRef.current;
    const scene = sceneRef.current;

    if (!bot || !botBody || !botStar || !leftEye || !rightEye || !matrix || !scene) return;

    const FILA_ESTRELLA = 31;
    const COL_ESTRELLA = 5;

    // --------------------------------------------------------
    // Posicionar la estrella sobre el cuerpo
    // --------------------------------------------------------
    function posicionarEstrella() {
      const medicion = document.createElement("span");
      medicion.textContent = "M";
      medicion.style.cssText = getComputedStyle(botBody).cssText;
      medicion.style.position = "absolute";
      medicion.style.visibility = "hidden";
      medicion.style.width = "auto";
      medicion.style.height = "auto";
      document.body.appendChild(medicion);
      const anchoChar = medicion.getBoundingClientRect().width;
      document.body.removeChild(medicion);

      const alturaChar = parseFloat(getComputedStyle(botBody).lineHeight) || 0;
      const lineHeightReal =
        alturaChar || botBody.getBoundingClientRect().height / 44;

      const baseX = COL_ESTRELLA * anchoChar;
      const baseY = FILA_ESTRELLA * lineHeightReal;

      botStar.style.setProperty("--star-base-x", `${baseX}px`);
      botStar.style.setProperty("--star-base-y", `${baseY}px`);
    }

    posicionarEstrella();
    window.addEventListener("resize", posicionarEstrella);

    // --------------------------------------------------------
    // Tracking del cursor — relativo al centro de la escena
    // --------------------------------------------------------
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    let starX = 0, starY = 0;
    let eyeX = 0, eyeY = 0;
    let saccadeX = 0, saccadeY = 0;

    // Clampea el valor normalizado a [-1, 1] para evitar giros extremos
    // cuando el cursor está muy lejos de la escena (ej: lado izquierdo
    // de la ventana con la escena a la derecha).
    function clamp(v, min, max) {
      return Math.max(min, Math.min(max, v));
    }

    function handleMouseMove(e) {
      const rect = scene.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      // Zona de influencia = 0.7× el tamaño de la escena
      // Punto intermedio: más sensible que ×1 pero sin llegar al extremo de ×0.5
      const influenceX = rect.width * 0.7;
      const influenceY = rect.height * 0.7;
      targetX = clamp((e.clientX - cx) / influenceX, -1, 1);
      targetY = clamp((e.clientY - cy) / influenceY, -1, 1);
    }

    function handleTouchMove(e) {
      const t = e.touches[0];
      const rect = scene.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const influenceX = rect.width * 0.7;
      const influenceY = rect.height * 0.7;
      targetX = clamp((t.clientX - cx) / influenceX, -1, 1);
      targetY = clamp((t.clientY - cy) / influenceY, -1, 1);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    // --------------------------------------------------------
    // Sacadas autónomas de los ojos
    // --------------------------------------------------------
    const saccadeInterval = setInterval(() => {
      saccadeX = (Math.random() - 0.5) * 26;
      saccadeY = (Math.random() - 0.5) * 18;
    }, 1800);

    // --------------------------------------------------------
    // Loop de animación principal
    // --------------------------------------------------------
    let rafId;

    function animateBot() {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;

      eyeX += (targetX - eyeX) * 0.22;
      eyeY += (targetY - eyeY) * 0.22;

      saccadeX *= 0.9;
      saccadeY *= 0.9;

      const eyeOffsetX = eyeX * 12 + saccadeX;
      const eyeOffsetY = eyeY * 15 + saccadeY;
      leftEye.style.setProperty("--eye-x", `${eyeOffsetX}px`);
      leftEye.style.setProperty("--eye-y", `${eyeOffsetY}px`);
      rightEye.style.setProperty("--eye-x", `${eyeOffsetX}px`);
      rightEye.style.setProperty("--eye-y", `${eyeOffsetY}px`);

      // Tilt máximo en 6.5° — punto intermedio entre 5° (anterior) y 8° (original)
      const tiltX = currentX * 6.5;
      const tiltY = currentY * -6.5;
      bot.style.setProperty("--tilt-x", `${tiltX}deg`);
      bot.style.setProperty("--tilt-y", `${tiltY}deg`);

      starX += (targetX - starX) * 0.045;
      starY += (targetY - starY) * 0.045;
      const starOffsetX = starX * 10;
      const starOffsetY = starY * 4;
      const starRot = starX * 6;
      botStar.style.setProperty("--star-x", `${starOffsetX}px`);
      botStar.style.setProperty("--star-y", `${starOffsetY}px`);
      botStar.style.setProperty("--star-rotate", `${starRot}deg`);

      const shadowX = -currentX * 2;
      const shadowY = -currentY * 2;
      botBody.style.textShadow = `${shadowX}px ${shadowY}px 6px rgba(139, 82, 255, 0.35)`;

      const eyeShadowX = -eyeX * 2;
      const eyeShadowY = -eyeY * 2;
      const eyeShadow = `${eyeShadowX}px ${eyeShadowY}px 5px rgba(139, 82, 255, 0.45)`;
      leftEye.style.textShadow = eyeShadow;
      rightEye.style.textShadow = eyeShadow;

      rafId = requestAnimationFrame(animateBot);
    }

    animateBot();

    // --------------------------------------------------------
    // Efecto Matrix — más caracteres, intervalo más corto
    // --------------------------------------------------------
    const matrixChars = "01.:+*#/\\%$@!?";

    function createMatrixChar() {
      // Hasta 60 caracteres simultáneos para mayor densidad visual
      if (matrix.children.length >= 60) return;
      const char = document.createElement("span");
      char.className = "sm-matrix-char";
      char.textContent = matrixChars[Math.floor(Math.random() * matrixChars.length)];
      char.style.left = `${Math.random() * 100}%`;

      const duration = 3 + Math.random() * 4;
      char.style.animationDuration = `${duration}s`;
      char.style.animationDelay = `${Math.random() * 0.5}s`;
      char.style.fontSize = `${10 + Math.random() * 10}px`;

      matrix.appendChild(char);
      setTimeout(() => char.remove(), (duration + 2) * 1000);
    }

    // Intervalo más corto = mayor frecuencia de aparición
    const matrixInterval = setInterval(createMatrixChar, 200);

    // --------------------------------------------------------
    // Cleanup al desmontar
    // --------------------------------------------------------
    return () => {
      cancelAnimationFrame(rafId);
      clearInterval(saccadeInterval);
      clearInterval(matrixInterval);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", posicionarEstrella);
    };
  }, []);

  return (
    <div className="sm-scene" ref={sceneRef} aria-hidden="true">
      {/* Halo de luz de fondo */}
      <div className="sm-glow" />

      {/* Lluvia matrix */}
      <div id="sm-matrix" ref={matrixRef} />

      {/* Bot flotante */}
      <div className="sm-bot-float">
        <div className="sm-bot-tilt" ref={botRef}>
          <div className="sm-ascii-wrapper">

            {/* Cuerpo principal */}
            <pre className="sm-bot-body" ref={botBodyRef}>
              {BOT_BODY_ASCII}
            </pre>

            {/* Estrella */}
            <pre className="sm-bot-star" ref={botStarRef}>
              {BOT_STAR_ASCII}
            </pre>

            {/* Ojo izquierdo */}
            <pre className="sm-eye" id="sm-eye-left" ref={leftEyeRef}>
              {EYE_LEFT_ASCII}
            </pre>

            {/* Ojo derecho */}
            <pre className="sm-eye" id="sm-eye-right" ref={rightEyeRef}>
              {EYE_RIGHT_ASCII}
            </pre>

          </div>
        </div>
      </div>
    </div>
  );
};

export default StarModel;
