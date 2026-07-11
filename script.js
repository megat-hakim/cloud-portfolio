const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const progress = document.querySelector(".progress");
const copyEmail = document.querySelector("[data-copy-email]");
const toast = document.querySelector(".toast");
const year = document.querySelector("[data-year]");
const email = "megathakim05@gmail.com";

year.textContent = new Date().getFullYear();

navToggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  progress.style.width = `${Math.min((scrollTop / maxScroll) * 100, 100)}%`;
});

copyEmail.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(email);
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 1800);
  } catch {
    window.location.href = `mailto:${email}`;
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
