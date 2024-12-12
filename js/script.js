// Initialisation de la carte
const map = L.map('map').setView([48.8566, 2.3522], 5); // Centre par défaut sur Paris
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Bouton pour afficher/masquer la carte
document.getElementById('toggleMap').addEventListener('click', () => {
    const mapDiv = document.getElementById('map');
    if (mapDiv.classList.contains('hidden-map')) {
        mapDiv.classList.remove('hidden-map');
        setTimeout(() => {
            map.invalidateSize(); // Redessiner la carte après l'affichage
        }, 300); // Délai pour s'assurer que la carte est visible
    } else {
        mapDiv.classList.add('hidden-map');
    }
});
