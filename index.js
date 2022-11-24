// --------------------------
        // Responsive Navigation
        // -------------------------
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
    // alert("hi");
    nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

// --------------------------
        // Sticky Navigation
        // -------------------------
const sectionmain = document.querySelector(".section-main");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        console.log(ent);
        !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
    }, {
    // viewport
    root: null,
    threshold: 0,
    rootMargin: "-100px",
}
);
// when the main section end part reached then we need to show the sticky navigation
observer.observe(sectionmain);



