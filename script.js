function scrollLeft() {
    document.querySelector('.scroll-container').scrollBy({ left: -300, behavior: 'smooth' });
}
function scrollRight() {
    document.querySelector('.scroll-container').scrollBy({ left: 300, behavior: 'smooth' });
}

function openModal() {
    document.getElementById("loginModal").style.display = "flex";
}
function closeModal() {
    document.getElementById("loginModal").style.display = "none";
}

document.addEventListener("scroll", function () {
    document.querySelectorAll(".fade-in").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.8) {
            el.classList.add("visible");
        }
    });
});
