// Importa la lógica y datos desde Student 1 (Conexión entre módulos)
import { obtenerProyectos } from '../student1/script.js';

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("galeria");
  const proyectos = obtenerProyectos();

  if (contenedor) {
    contenedor.innerHTML = proyectos.map(p => `
      <div class="card-dynamic">
        <h3>${p.titulo}</h3>
        <p>Categoría: <span>${p.tag}</span></p>
      </div>
    `).join('');
  }
});