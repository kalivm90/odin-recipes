document.addEventListener("DOMContentLoaded", function() {
    let homeButton = document.getElementsByClassName("nav-button")[0];
    let url = "../index.html";

    homeButton.addEventListener("click", function() {
        window.open(url, "_self")
    })
})