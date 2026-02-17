document.getElementById('btnCalcular').addEventListener('click', () => {
  const nombre = document.getElementById('nombre').value.trim();
  const u1 = parseFloat(document.getElementById('unidad1').value);
  const u2 = parseFloat(document.getElementById('unidad2').value);
  const u3 = parseFloat(document.getElementById('unidad3').value);

  if (!nombre || isNaN(u1) || isNaN(u2) || isNaN(u3)) {
    alert('Completa todos los campos con números válidos');
    return;
  }

  const promedio = (u1 + u2 + u3) / 3;
  const estatus = promedio >= 6 ? "Aprobado" : "Reprobado";

  document.getElementById('promedio').value = promedio.toFixed(2);
  document.getElementById('estatus').value = estatus;
});
