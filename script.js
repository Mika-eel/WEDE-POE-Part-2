// Display the current year in the footer
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();
});

// Confirm navigation
function confirmNavigation(event) {
    if (!confirm("Are you sure you want to navigate away from this page?")) {
        event.preventDefault(); // Prevents navigation if user clicks "Cancel"
    }
}

// Enlarge image on click
function enlargeImage(img) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImage.src = img.src;
}

// Close modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
   
Sitemap: https:"//www.hurisa.org/sitemap.xml"
}