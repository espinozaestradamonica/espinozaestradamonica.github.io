document.addEventListener("DOMContentLoaded", function () {
    // Cargar datos desde el archivo JSON
    fetch("cont-redes.json")
      .then((response) => response.json())
      .then((data) => {
        const container = document.getElementById("social-media-container");
        const redesSociales = data.redesSociales;
  
        // Crear tarjetas para cada red social
        redesSociales.forEach((red) => {
          const card = document.createElement("div");
          card.className = "col-lg-4 col-md-6 mb-4";
  
          card.innerHTML = `
            <div class="card text-center shadow" style="border-left: 5px solid ${red.color};">
              <div class="card-body">
                <i class="${red.icono} fa-4x mb-3" style="color: ${red.color};"></i>
                <h5 class="card-title">${red.nombre}</h5>
                <a href="${red.url}" class="btn btn-outline-primary" target="_blank">Visítanos en ${red.nombre}</a>
              </div>
            </div>
          `;
          container.appendChild(card);
        });
      })
      .catch((error) => console.error("Error al cargar el archivo JSON:", error));
  });
  