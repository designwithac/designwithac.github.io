let showBttn = document.getElementById("show_menu");
let navbarOverlay = document.querySelector(".navbar__overlay");
let closeBttn = document.getElementById("close__menu");



showBttn.addEventListener("click", function(){
    console.log(navbarOverlay);
    navbarOverlay.classList.add("show__menu");
});

closeBttn.addEventListener("click", function(){
    console.log(navbarOverlay);
    navbarOverlay.classList.remove("show__menu");
});
