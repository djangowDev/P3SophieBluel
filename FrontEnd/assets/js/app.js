// Récupération des travaux depuis l’API
fetch("http://127.0.0.1:5678/api/works")
  .then((response) => response.json())
  .then((works) => {
    console.log("Travaux récupérés :", works);
    displayWorks(works);
  })
  .catch((error) => console.error("Erreur API :", error));

// Fonction qui affiche tous les travaux
function displayWorks(works) {
  const gallery = document.querySelector(".gallery");

  // on vide la galerie avant d’ajouter les travaux (évite les doublons si on rappelle la fonction)
  gallery.innerHTML = "";

  works.forEach((work) => {
    const figure = document.createElement("figure");

    figure.innerHTML = `
      <img src="${work.imageUrl}" alt="${work.title}">
      <figcaption>${work.title}</figcaption>
    `;

    gallery.appendChild(figure);
  });
}
