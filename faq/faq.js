// URL del archivo JSON
const faqDataUrl = "faq.json";

// Contenedor para las preguntas frecuentes
const faqContainer = document.getElementById("faq-container");

// Función para cargar los datos JSON
async function loadFaqs() {
    try {
        const response = await fetch(faqDataUrl);
        const data = await response.json();
        renderFaqs(data.faqs);
    } catch (error) {
        console.error("Error al cargar el archivo JSON:", error);
    }
}

// Función para renderizar las preguntas frecuentes
function renderFaqs(faqs) {
    faqs.forEach((category, index) => {
        const categoryId = `category-${index}`;
        const accordionItem = document.createElement("div");
        accordionItem.className = "accordion-item";

        accordionItem.innerHTML = `
            <h2 class="accordion-header" id="heading-${categoryId}">
                <button class="accordion-button collapsed faq-category" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${categoryId}" aria-expanded="false" aria-controls="collapse-${categoryId}">
                    ${category.category}
                </button>
            </h2>
            <div id="collapse-${categoryId}" class="accordion-collapse collapse" aria-labelledby="heading-${categoryId}" data-bs-parent="#faq-container">
                <div class="accordion-body">
                    ${renderQuestions(category.questions)}
                </div>
            </div>
        `;

        faqContainer.appendChild(accordionItem);
    });
}

// Función para renderizar las preguntas dentro de una categoría
function renderQuestions(questions) {
    return questions
        .map(
            (q) => `
                <div class="mb-3">
                    <h5 class="faq-question">${q.answer}</h5>
                </div>
            `
        )
}

// Cargar las preguntas frecuentes al inicio
document.addEventListener("DOMContentLoaded", loadFaqs);
