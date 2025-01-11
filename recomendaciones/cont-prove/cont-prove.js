// Cargar proveedores desde el archivo JSON
fetch('cont-prove.json')
    .then(response => response.json())
    .then(data => {
        let proveedoresContainer = document.getElementById('proveedores-container');

        data.forEach(proveedor => {
            // Crear tarjeta para cada proveedor
            let card = document.createElement('div');
            card.classList.add('col-md-4');

            card.innerHTML = `
                <div class="card shadow-sm">
                    <img src="${proveedor.imagen}" class="card-img-top" alt="${proveedor.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${proveedor.nombre}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${proveedor.categoria}</h6>
                        <p class="card-text">${proveedor.descripcion}</p>
                        <a href="${proveedor.web}" class="btn btn-primary" target="_blank">Visitar página</a>
                    </div>
                </div>
            `;

            proveedoresContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error al cargar los proveedores:', error));
