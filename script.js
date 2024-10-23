let btn = document.querySelector(".toggle");
btn.addEventListener('click', () => {
    document.querySelector(".main").classList.toggle("dark-mode");
    document.querySelector(".navbar").classList.toggle("dark-mode");
    document.querySelector(".heading").classList.toggle("dark-mode");
    document.querySelector(".about-section").classList.toggle("dark-mode");
    document.querySelector("body").classList.toggle("dark-mode");
    document.querySelector("form").classList.toggle("dark-mode-form");
    document.querySelector(".contact").classList.toggle("dark-mode-form");
    document.querySelector(".form-btn").classList.toggle("dark-mode-form-btn");
    document.querySelector(".sidebar").classList.toggle("dark-mode");

    let inps = document.querySelectorAll(".input");
    for(let i of inps){
        i.classList.toggle("dark-mode-form-input");
        i.style.color = "blue";
    }
})

let side = document.querySelector(".sidebar-t");
side.addEventListener('click', () => {
    document.querySelector(".main").classList.toggle("dark-mode");
    document.querySelector(".navbar2").classList.toggle("dark-mode");
    document.querySelector(".sidebar").classList.toggle("dark-mode-sidebar");
    document.querySelector(".about-section").classList.toggle("dark-mode");
    document.querySelector("#skill").classList.toggle("dark-mode");
    document.querySelector(".contact").classList.toggle("dark-mode");
    // document.querySelector("form").classList.toggle("dark-mode-form");
    // document.querySelector(".contact").classList.toggle("dark-mode-form");
    // document.querySelector(".form-btn").classList.toggle("dark-mode-form-btn");

    // document.querySelector(".main").classList.toggle("dark-mode");
    // document.querySelector(".navbar").classList.toggle("dark-mode");
    // document.querySelector(".heading").classList.toggle("dark-mode");
    // document.querySelector(".about-section").classList.toggle("dark-mode");
    // document.querySelector("body").classList.toggle("dark-mode");
    // document.querySelector(".sidebar").classList.toggle("dark-mode");
})