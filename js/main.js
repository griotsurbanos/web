function loadPage(page) {
    // Utiliza fetch para cargar el contenido del archivo HTML desde el servidor local
    fetch(`../pages/${page}.html`)
        .then(response => response.text())
        .then(html => {
            // Obtén el contenedor de contenido
            const contentContainer = document.getElementById('content');

            // Cambia dinámicamente el contenido sin recargar la página
            contentContainer.innerHTML = html;
        })
        .catch(error => console.error('Error al cargar la página:', error));
}
