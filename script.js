// Fixed NAvigation Bar
window.addEventListener("scroll", function(){
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle("fixed", this.window.scrollY > 0);
});

//  Navigation Button Functionalities
let menuBtn = document.querySelector(".menu-btn");
let searchBtn = document.querySelector(".searchbtn");
let cartBtn = document.querySelector(".cartbtn");
let darkBtn = document.querySelector(".darkbtn");

searchBtn.onclick = function(){
    document.getElementById("search-form").classList.toggle("active");

    // Changes Icon
    if(document.getElementById("search-form").classList.contains("active")){
        searchBtn.classList.remove("bx-search-alt-2");
        searchBtn.classList.add("bx-x");
    } else {
        searchBtn.classList.add("bx-search-alt-2");
        searchBtn.classList.remove("bx-x");
    }
}

cartBtn.onclick = function(){
    document.getElementById("cart").classList.toggle("active");

    // Changes Icon
    if(document.getElementById("cart").classList.contains("active")){
        cartBtn.classList.remove("bx-cart");
        cartBtn.classList.add("bx-x");
    } else {
        cartBtn.classList.add("bx-cart");
        cartBtn.classList.remove("bx-x");
    }
}

darkBtn.onclick = function(){
    document.body.classList.toggle("dark-mode");

    // Changes Icon
    if(document.body.classList.contains("dark-mode")){
        darkBtn.classList.remove("bx-moon");
        darkBtn.classList.add("bx-sun");
    } else {
        darkBtn.classList.add("bx-moon");
        darkBtn.classList.remove("bx-sun");
    }
}

// Menu Navigation Functionality
let menuTab = document.querySelector(".menu-tabs");
menuTab.addEventListener("click", function(e){
    if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
        menuTab.querySelector(".active").classList.remove("active");

        e.target.classList.add("active");
    } else {
        return;
    }
})