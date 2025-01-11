// URL del archivo JSON con los consejos
const url = "cont-conse.json";

// Contenedor donde se mostrarán los consejos
const container = document.getElementById("consejos-container").querySelector(".row");

// Función para cargar los consejos
async function cargarConsejos() {
    try {
        const response = await fetch(url); // Obtener los datos JSON
        const consejos = await response.json();

        consejos.forEach(consejo => {
            // Crear tarjeta para cada consejo
            const card = document.createElement("div");
            card.className = "col-md-6 col-lg-4";
            card.innerHTML = `
                <div class="card consejo-card p-3 shadow-sm">
                    <div class="d-flex align-items-center">
                        <i class="fas ${consejo.icono} consejo-icon me-3"></i>
                        <h5 class="card-title mb-0">${consejo.titulo}</h5>
                    </div>
                    <p class="card-text mt-3">${consejo.descripcion}</p>
                </div>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error("Error al cargar los consejos:", error);
        container.innerHTML = "<p class='text-danger'>No se pudieron cargar los consejos. Intenta más tarde.</p>";
    }
}

// Llamar a la función al cargar la página
cargarConsejos();
