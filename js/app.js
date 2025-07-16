const openMenu = () => {
    const menu = document.querySelector(".header-menu");
    menu.classList.toggle("active");

    const icon = document.querySelector(".material-symbols-outlined.icon");

    if (menu.classList.contains("active")) {
        icon.innerHTML = "cancel";
    } else {
        icon.innerHTML = "menu";
    }
};

// Fermer le menu mobile quand on clique sur un lien
document.querySelectorAll(".header-menu a").forEach(link => {
    link.addEventListener("click", () => {
        const menu = document.querySelector(".header-menu");
        const icon = document.querySelector(".material-symbols-outlined.icon");

        if (menu.classList.contains("active")) {
            menu.classList.remove("active");
            icon.innerHTML = "menu";
        }
    });
});

// Fonction pour ouvrir la modale avec titre et description
const openModal = (title, description) => {
  const modal = document.getElementById("modal-Réalisations");
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-description").textContent = description;
  modal.style.display = "block";
};

// Fonction pour fermer la modale
const closeModal = () => {
  const modal = document.getElementById("modal-Réalisations");
  modal.style.display = "none";
};

// Attacher les événements click sur chaque réalisation
document.querySelectorAll(".réalisation").forEach(item => {
  item.addEventListener("click", () => {
    const title = item.getAttribute("data-title");
    const description = item.getAttribute("data-description");
    openModal(title, description);
  });
});

// Fermer la modale quand on clique sur la croix
document.querySelector(".close-button").addEventListener("click", closeModal);

// Fermer la modale si clic en dehors du contenu
window.addEventListener("click", (e) => {
  const modal = document.getElementById("modal-Réalisations");
  if (e.target === modal) {
    closeModal();
  }
});
