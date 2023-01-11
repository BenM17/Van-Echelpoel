    // mainnav animatie
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    })

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))
    // einde mainnav animatie

    // product animatie
    const arrow = document.querySelector(".arrow");
    const nav_card_header = document.querySelector(".nav-card-header");

    nav_card_header.addEventListener("click", () => {
        arrow.classList.toggle("arrow-up");
    })

    document.querySelectorAll(".productnav-link").forEach(l => l.addEventListener("click", () => {
        $(".nav-card-body").slideToggle("slow");
    }))

    $(".nav-card-header").click(function () {
        $(".nav-card-body").slideToggle("slow");
    });
    // einde product animatie
