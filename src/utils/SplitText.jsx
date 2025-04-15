import { useEffect, useRef } from "react";
import { animate, stagger } from "motion";
import { splitText } from "motion-plus";

export default function SplitText() {
//   const containerRef = useRef<HTMLDivElement>(null);


  return (
    <div className='container'>
      <h1 className='h1'>
            Soy un desarrollador full stack en Javascript, formado mediante un bootcamp de más de 800 horas y con varios proyectos que me permitieron la práctica
            necesaria sobre los contenidos adquiridos. Con una trayectoria como líder y asesor en el área de atención al cliente dentro de una empresa que ofrece
            servicios de outsourcing, tercerización de procesos y soluciones tecnológicas. Actualmente trabajando para el área de soporte de Tecnología. Esta experienciame ha permitido desarrollar habilidades claves del trabajo en equipo y análisis de datos masivos.
      </h1>
      {/* <Stylesheet /> */}
    </div>
  );
}

// function Stylesheet() {
//   return (
//     <style>{`
//             .container {
//                 display: flex;
//                 justify-content: center;
//                 align-items: center;
//                 width: 100%;
//                 max-width: 420px;
//                 text-align: left;
//                 visibility: hidden;
//             }

//             .split-word {
//                 will-change: transform, opacity;
//             }
//         `}</style>
//   );
// }