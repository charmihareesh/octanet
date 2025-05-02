
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
}


document.getElementById("exploreBtn").addEventListener("click", () => {
    window.location.href = "#collection";
});


function showDetails(outfit) {
    alert(`✨ Explore ${outfit} - Try it virtually with AR!`);
}


document.getElementById("tryOnBtn").addEventListener("click", () => {
    alert("🕶️ Launching Virtual Try-On... Stay stylish!");
});
