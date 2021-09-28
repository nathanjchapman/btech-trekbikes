// To-top button
let toTopButton = document.querySelector('#to-top-button');

const scrollFunction = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        toTopButton.style.display = "block";
    } else {
        toTopButton.style.display = "none";
    }
}

const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

toTopButton.addEventListener("click", topFunction);

window.onscroll = () => {
    scrollFunction();
};