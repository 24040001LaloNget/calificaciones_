document.getElementById('btnCalcular').addEventListener('click', async () => {
  const nombre = document.getElementById('nombre').value.trim();
  const unidad1 = document.getElementById('unidad1').value.trim();
  const unidad2 = document.getElementById('unidad2').value.trim();
  const unidad3 = document.getElementById('unidad3').value.trim();

  if (!nombre || !unidad1 || !unidad2 || !unidad3) {
    alert('Por favor completa todos los campos');
    return;
  }

  try {
    const res = await fetch('/calcular-promedio', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, unidad1, unidad2, unidad3 })
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error || 'Error al calcular');
      return;
    }

    document.getElementById('promedio').value = Number(data.promedio).toFixed(2);
    document.getElementById('estatus').value = data.estatus;
  } catch (err) {
    console.error(err);
    alert('No se pudo conectar al servidor. ¿Ya lo iniciaste con npm start?');
  }
});
