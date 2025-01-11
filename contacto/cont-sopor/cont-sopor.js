// Cargar FAQs desde JSON
fetch('cont-sopor.json')
    .then(response => response.json())
    .then(data => renderFAQs(data))
    .catch(error => console.error('Error al cargar FAQs:', error));

// Función para mostrar FAQs
function renderFAQs(faqs) {
    const faqContainer = document.getElementById('faq-container');
    faqContainer.innerHTML = ''; // Limpia el contenedor

    faqs.forEach((faq, index) => {
        faqContainer.innerHTML += `
            <div class="faq-item mb-3">
                <button class="btn btn-link d-block w-100 text-start faq-question" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#faq-${index}" 
                        aria-expanded="false" 
                        aria-controls="faq-${index}">
                    <i class="fas fa-chevron-right me-2"></i>${faq.question}
                </button>
                <div id="faq-${index}" class="collapse">
                    <p class="faq-answer p-3 bg-light rounded">${faq.answer}</p>
                </div>
            </div>`;
    });
}
