document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop().toLowerCase(); // Get current page
    const navLinks = document.querySelectorAll(".navbar ul li a");

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href").toLowerCase(); // Get href and convert to lowercase
        if (linkPage === currentPage || (currentPage === "" && linkPage === "home.html")) {
            link.classList.add("active"); // Add 'active' to current link
        } else {
            link.classList.remove("active"); // Remove 'active' from other links
        }
    });
});
