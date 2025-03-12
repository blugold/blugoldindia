document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const nav = document.querySelector("nav");
    const homeSection = document.getElementById("home");
    window.addEventListener("load", function () {
        const loadingScreen = document.getElementById("loading-screen");
        loadingScreen.style.opacity = "0"; // Fade out
        setTimeout(() => {
            loadingScreen.style.display = "none"; // Remove from DOM
        }, 500); // Match the duration of the fade-out
    });
    // Toggle mobile menu
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            menuToggle.classList.toggle("open");
        });

        // Hide menu when a link is clicked (for smooth navigation)
        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuToggle.classList.remove("open");
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const offset = 80; // Adjust for navbar height
                const targetPosition = targetSection.offsetTop - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Scroll animation for sections
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));

    // Navbar scroll effect
    window.addEventListener("scroll", () => {
        if (nav) {
            if (window.scrollY > 50) {
                nav.classList.add("scrolled");
            } else {
                nav.classList.remove("scrolled");
            }
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const homeSection = document.getElementById("home");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    observer.observe(homeSection); // Observe the Home section
});

document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const items = document.querySelectorAll(".carousel-item");
    let currentIndex = 0;

    // Function to move to the next item
    const nextItem = () => {
        currentIndex = (currentIndex + 1) % items.length; // Loop back to the first item
        const offset = -currentIndex * 100; // Calculate the offset for sliding
        carousel.style.transform = `translateX(${offset}%)`; // Apply the transform
    };

    // Automatically transition every 5 seconds
    setInterval(nextItem, 5000);
});

document.addEventListener("DOMContentLoaded", () => {
    // Select all About section containers
    const aboutSections = document.querySelectorAll(".about-section");

    // Create an Intersection Observer
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible"); // Add the 'visible' class
                }
            });
        },
        {
            threshold: 0.2, // Trigger when 20% of the element is visible
        }
    );

    // Observe each About section container
    aboutSections.forEach((section) => {
        observer.observe(section);
    });
});

