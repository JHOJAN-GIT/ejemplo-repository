// Funcionalidad compartida exportable
export function obtenerProyectos() {
  return [
    { id: 1, titulo: "Portal Extensión Cultural", tag: "HTML5 / A11y" },
    { id: 2, titulo: "Módulo Proyección Social", tag: "CSS Grid / JS" },
  ];
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn-sincronizar");
  if (btn) {
    btn.addEventListener("click", () => {
      alert("Sincronización activa con el Módulo de Student 2.");
    });
  }
});
