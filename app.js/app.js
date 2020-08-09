const header = document.querySelector(".header");

window.addEventListener("scroll", function() {

    if (window.scrollY < 500) {
        header.classList.remove("header--sticky");
    } else {
        header.classList.add("header--sticky");
    }

})