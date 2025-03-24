// Datos simulados (en un proyecto real, esto vendría de una base de datos)
const data = [
    { id: 1, name: "Laptop Dell", category: "Electrónica", price: 800, location: "México" },
    { id: 2, name: "Viaje a Cancún", category: "Viajes", price: 1200, location: "México" },
    { id: 3, name: "Empleo Programador", category: "Empleo", price: 0, location: "España" },
    { id: 4, name: "Smartphone Samsung", category: "Electrónica", price: 500, location: "EEUU" },
    { id: 5, name: "Viaje a Madrid", category: "Viajes", price: 1500, location: "España" }
];

// Función para mostrar los resultados
function displayResults(results) {
    const resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.innerHTML = ""; // Limpiar resultados anteriores

    if (results.length === 0) {
        resultsContainer.innerHTML = "<p>No se encontraron resultados.</p>";
        return;
    }

    results.forEach(item => {
        const resultDiv = document.createElement("div");
        resultDiv.classList.add("result-item");
        resultDiv.innerHTML = `
            <h4>${item.name}</h4>
            <p>Categoría: ${item.category}</p>
            <p>Precio: $${item.price}</p>
            <p>Ubicación: ${item.location}</p>
        `;
        resultsContainer.appendChild(resultDiv);
    });
}

// Función para buscar
function search() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm) ||
        item.location.toLowerCase().includes(searchTerm)
    );
    applyFilters(filteredData);
}

// Función para aplicar filtros
function applyFilters(filteredData = data) {
    const category = document.getElementById("categoryFilter").value;
    const price = document.getElementById("priceFilter").value;
    const location = document.getElementById("locationFilter").value;

    let results = filteredData;

    // Filtrar por categoría
    if (category) {
        results = results.filter(item => item.category === category);
    }

    // Filtrar por precio
    if (price) {
        results = results.filter(item => item.price <= parseInt(price));
    }

    // Filtrar por ubicación
    if (location) {
        results = results.filter(item => item.location === location);
    }

    displayResults(results);
}

// Mostrar todos los resultados al cargar la página
window.onload = () => {
    displayResults(data);
};