document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-item .nav-link");
  const sections = document.querySelectorAll("section");

  const options = {
    root: null,
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const targetId = entry.target.id;

        links.forEach((link) => {
          link.classList.remove("btn-custom");
        });

        links.forEach((link) => {
          if (link.getAttribute("href").substring(1) === targetId) {
            link.classList.add("btn-custom");
          }
        });
      }
    });
  }, options);

  sections.forEach((section) => observer.observe(section));
});
