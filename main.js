const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
    navLinks.classList.remove("active");
  }
});

const swiper = new Swiper(".hero-swiper", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const categoriaBtns = document.querySelectorAll(".categoria-btn");
const cardapioItems = document.querySelectorAll(".cardapio-item");

categoriaBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    categoriaBtns.forEach((b) => b.classList.remove("ativo"));

    btn.classList.add("ativo");

    const categoria = btn.dataset.categoria;

    // Filtra os itens do cardápio
    cardapioItems.forEach((item) => {
      if (categoria === "" || item.dataset.categoria === categoria) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const categoriaPaesBtn = document.querySelector(
    '.categoria-btn[data-categoria="paes"]'
  );
  categoriaPaesBtn.click();
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
