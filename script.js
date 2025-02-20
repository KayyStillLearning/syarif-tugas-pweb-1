document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);


    // Form Validasi
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();


        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();


        // Validasi email dengan regex
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!name || !email || !message) {
            alert("Harap isi semua kolom!");
            return;
        }


        if (!emailRegex.test(email)) {
            alert("Harap masukkan email yang valid!");
            return;
        }


        // Efek loading sebelum alert
        setTimeout(() => {
            alert(`Terima kasih, ${name}! Pesan Anda telah dikirim.`);
            document.getElementById("contactForm").reset();
        }, 500);
    });


    // Hero Section (Fade-in + Slide-up)
    gsap.from(".hero-content", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power2.out"
    });


    // Sections (Fade-in + Slide-up)
    gsap.utils.toArray(".fade-in").forEach((section) => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse",
                once: true
            }
        });
    });


    // Projects (Stagger + Scale-up)
    gsap.from(".project", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
            trigger: "#projects",
            start: "top 80%",
            once: true
        }
    });


    // Contact Form (Fade-in + Rotate)
    gsap.from("#contactForm", {
        opacity: 0,
        rotateY: 90,
        duration: 1.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
            once: true
        }
    });


    // Gambar Profil Animasi (Bounce & Rotate)
    gsap.from(".profile-pic", {
        opacity: 0,
        scale: 0.5,
        rotate: -10,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)"
    });


    // Navbar Hide on Scroll Down, Show on Scroll Up
    let lastScrollTop = 0;
    let navbar = document.querySelector("header");


    window.addEventListener("scroll", function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;


        if (scrollTop > lastScrollTop) {
            navbar.style.top = "-80px"; // Sembunyikan navbar saat scroll ke bawah
        } else {
            navbar.style.top = "0"; // Tampilkan navbar saat scroll ke atas
        }
        lastScrollTop = scrollTop;
    });
});



