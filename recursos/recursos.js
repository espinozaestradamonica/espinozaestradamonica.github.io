// URL del archivo JSON
const faqDataUrl = "recursos.json";

// Arreglo para almacenar los recursos
let resources = [];

// Seleccionar el formulario y la tabla
const form = document.getElementById('resourceForm');
const tableBody = document.getElementById('resourceTableBody');

// Manejar el envío del formulario
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar recargar la página

    // Obtener valores de los campos
    const blog = document.getElementById('blogInput').value.trim();
    const tutorial = document.getElementById('tutorialInput').value.trim();
    const forum = document.getElementById('forumInput').value.trim();
    const tool = document.getElementById('toolInput').value.trim();

    // Validar que al menos un campo tenga contenido
    if (!blog && !tutorial && !forum && !tool) {
        alert('Por favor, completa al menos un campo.');
        return;
    }

    // Crear objeto de recurso
    const resource = {
        blog: blog || "N/A",
        tutorial: tutorial || "N/A",
        forum: forum || "N/A",
        tool: tool || "N/A"
    };

    // Agregar al arreglo de recursos
    resources.push(resource);

    // Actualizar la tabla
    updateTable();

    // Limpiar el formulario
    form.reset();
});

// Actualizar la tabla con los datos del arreglo
function updateTable() {
    tableBody.innerHTML = ''; // Limpiar la tabla

    resources.forEach((resource, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${resource.blog}</td>
            <td>${resource.tutorial}</td>
            <td>${resource.forum}</td>
            <td>${resource.tool}</td>
        `;
        tableBody.appendChild(row);
    });
}
