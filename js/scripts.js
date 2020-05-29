const guideModal = $("#guideModal");
const previewImg = $("#guide-preview");
const saveModal = $("#saveModal");
const downloadButton = $("#downloadButton");

document.getElementById("saveCVButton").addEventListener("click", () => {
  guideModal.modal("hide");
  saveModal.modal("hide");
  setTimeout(() => {
    window.print();
  }, 500);
});

Array.from(document.querySelectorAll(".guide-img")).forEach((e) =>
  e.addEventListener("click", (e) => {
    previewImg.attr("src", e.target.src);
    guideModal.modal("show");
  })
);
