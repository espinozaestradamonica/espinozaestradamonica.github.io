
// Referencias a los elementos del formulario
const tipoEvento = document.getElementById('tipo-evento');
const numeroAsistentes = document.getElementById('numero-asistentes');
const guardarPresupuesto = document.getElementById('guardar-presupuesto');
const resultadoJson = document.getElementById('resultado-json');
const presupuestoTotal = document.getElementById('presupuesto-total');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Función para calcular el presupuesto
function calcularPresupuesto() {
    const asistentes = parseInt(numeroAsistentes.value, 10) || 0;
    let total = 0;

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            const costoPorAsistente = parseInt(checkbox.getAttribute('data-costo'), 10);
            total += costoPorAsistente * asistentes;
        }
    });

    presupuestoTotal.value = `Bs.${total.toLocaleString()}`;
}

// Actualizar el presupuesto cuando cambian los campos
numeroAsistentes.addEventListener('input', calcularPresupuesto);
checkboxes.forEach((checkbox) => checkbox.addEventListener('change', calcularPresupuesto));

// Manejar el evento de guardar presupuesto
guardarPresupuesto.addEventListener('click', () => {
    if (!tipoEvento.value || !numeroAsistentes.value || parseInt(numeroAsistentes.value, 10) <= 0) {
        alert('Por favor, complete todos los campos correctamente.');
        return;
    }

    const categoriasSeleccionadas = Array.from(checkboxes)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);

    if (categoriasSeleccionadas.length === 0) {
        alert('Seleccione al menos una categoría de gastos.');
        return;
    }

    const presupuesto = {
        tipoEvento: tipoEvento.value,
        numeroAsistentes: parseInt(numeroAsistentes.value, 10),
        categoriasGastos: categoriasSeleccionadas,
        presupuestoTotal: presupuestoTotal.value,
        fechaCreacion: new Date().toISOString()
    };

    resultadoJson.textContent = JSON.stringify(presupuesto, null, 4);
    localStorage.setItem('presupuestoGuardado', JSON.stringify(presupuesto));
});
