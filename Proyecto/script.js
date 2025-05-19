const swiper1 = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

document.querySelectorAll(".mySwiper-2").forEach(swiperEl => {
    new Swiper(swiperEl, {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: swiperEl.querySelector(".swiper-button-next"),
            prevEl: swiperEl.querySelector(".swiper-button-prev"),
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            520: { slidesPerView: 2 },
            950: { slidesPerView: 3 },
        }
    });
});

document.querySelectorAll(".tabInput").forEach(input => {
    input.addEventListener("change", () => {
        const id = input.value;
        const swiperElement = document.getElementById("swiper" + id);
        if (swiperElement && swiperElement.swiper) {
            swiperElement.swiper.update();
        }
    });
});

const iniciarEncuesta = () => {
    const nombre = prompt("¿Cuál es tu nombre?");
    if (!nombre) return alert("No escribiste ningún nombre.");

    alert(`¡Hola ${nombre}! Gracias por visitarnos.`);

    const edad = parseInt(prompt("¿Cuántos años tienes?"));
    if (isNaN(edad)) return alert("Eso no parece un número. Inténtalo de nuevo.");

    edad >= 18
        ? alert("¡Tenemos servicios personalizados para empresas y emprendedores!")
        : alert("Podemos ayudarte con tus proyectos escolares o personales. 🎨");

    
    const proyectosVistos = parseInt(prompt("¿Cuántos proyectos has visto en nuestra galería?")) || 0;
    const puntosArray = Array.from({ length: proyectosVistos }, (_, i) => 10000);
    const puntosTotales = puntosArray.reduce((acc, val) => {
        const nuevoTotal = acc + val;
        return nuevoTotal >= 50000 ? acc : nuevoTotal;
    }, 0);

    alert(`¡Genial! Has acumulado un bono de descuento de $${puntosTotales} pesos.`);

    
    const proyectos = [
        { nombre: "Diseño Web", destacado: true },
        { nombre: "Identidad Visual", destacado: false },
        { nombre: "Cartel Publicitario", destacado: true },
        { nombre: "Diseño de App", destacado: false }
    ];

    const destacados = proyectos
        .filter(p => p.destacado)
        .map(p => `• ${p.nombre}`)
        .join("\n");

    alert(`Proyectos destacados para ti:\n${destacados}`);

    
    let deseaSeguir = prompt("¿Quieres seguir explorando nuestros diseños? (sí/no)");
    while (deseaSeguir && deseaSeguir.toLowerCase() !== "no") {
        alert("¡Mira nuestro portafolio para más inspiración!");
        deseaSeguir = prompt("¿Quieres seguir explorando nuestros diseños? (sí/no)");
    }

    alert("¡Gracias por tu visita! 💡");
};
window.addEventListener("scroll", () => {
    const btn = document.getElementById("btnSubir");
    if (window.scrollY > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnSubir");

    window.addEventListener("scroll", () => {
        btn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    btn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});