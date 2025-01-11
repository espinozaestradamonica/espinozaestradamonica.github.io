// Cargar asesores desde el archivo JSON
fetch('cont-atenc.json')
    .then(response => response.json())
    .then(data => mostrarAsesores(data))
    .catch(error => console.error('Error al cargar los datos:', error));

// Función para mostrar asesores en el HTML
function mostrarAsesores(asesores) {
    const contenedor = document.getElementById('asesores');
    asesores.forEach(asesor => {
        const card = document.createElement('div');
        card.className = 'col-md-6 col-lg-4 mb-4';

        card.innerHTML = `
            <div class="card shadow-sm border-0">
                <img src="${asesor.foto}" class="card-img-top rounded-circle mx-auto mt-4" alt="${asesor.nombre}" style="width: 100px; height: 100px;">
                <div class="card-body text-center">
                    <h5 class="card-title">${asesor.nombre}</h5>
                    <p class="text-muted">${asesor.cargo}</p>
                    <p class="card-text">${asesor.descripcion}</p>
                    <a href="mailto:${asesor.contacto.email}" class="btn btn-primary btn-sm">Contactar</a>
                    <div class="mt-3">
                        <a href="${asesor.contacto.redes.instagram}" target="_blank" class="text-danger mx-2">
                            <i class="fab fa-instagram fa-lg"></i>
                        </a>
                        <a href="${asesor.contacto.redes.linkedin}" target="_blank" class="text-primary mx-2">
                            <i class="fab fa-linkedin fa-lg"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
        contenedor.appendChild(card);
    });
}
