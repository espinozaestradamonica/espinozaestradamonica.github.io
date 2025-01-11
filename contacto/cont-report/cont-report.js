// Simula una base de datos inicial cargando desde un archivo JSON.
let reportes = [
    {
        nombre: "Luzmila Carpio",
        email: "luzmila.carpio@example.com",
        descripcion: "Tengo algunos problemas con el soporte técnico."
        },
    {
        nombre: "William Luna",
        email: "william.luna@example.com",
        descripcion: "No puedo descargar la imagen de la pagina de tendencias."
    }
];

// Seleccionar elementos del DOM
const reportForm = document.getElementById('reportForm');
const reportList = document.getElementById('reportList');

// Función para renderizar los reportes
function renderReportes() {
    reportList.innerHTML = '';
    reportes.forEach((reporte, index) => {
        const reportCard = `
            <div class="report-card">
                <h5><strong>${reporte.nombre}</strong> <span class="text-muted">(${reporte.email})</span></h5>
                <p>${reporte.descripcion}</p>
            </div>
        `;
        reportList.innerHTML += reportCard;
    });
}

// Escuchar el envío del formulario
reportForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const descripcion = document.getElementById('problemDescription').value;

    // Agregar el reporte a la lista
    const nuevoReporte = { nombre, email, descripcion };
    reportes.push(nuevoReporte);

    // Limpiar formulario
    reportForm.reset();

    // Actualizar lista de reportes
    renderReportes();

    // Mostrar mensaje de éxito (opcional)
    alert('¡Reporte enviado con éxito!');
});

// Renderizar reportes iniciales
renderReportes();
