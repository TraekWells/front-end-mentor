const shareButton = document.getElementById("share");
const shareMenu = document.getElementById("share-menu");

const openShareMenu = function () {
  shareMenu.classList.toggle("open");
  shareButton.classList.toggle("active");
};

shareButton.addEventListener("click", openShareMenu);
