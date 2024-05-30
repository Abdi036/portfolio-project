document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".link_container ul li a");
  const lazySections = document.querySelectorAll(".lazy-section");

  const portfolioSlider = document.querySelector(".portfolio-slider");
  const portfolioList = document.querySelector(".portfolio-list");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  // Change Active Link
  function changeActiveLink() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
    navLinks.forEach((link) => link.classList.remove("active"));
    if (sections[index]) {
      navLinks[index].classList.add("active");
    }
  }
  changeActiveLink();
  window.addEventListener("scroll", changeActiveLink);

  // Lazy Loading
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  lazySections.forEach((section) => {
    observer.observe(section);
  });

  // Slider Functionality
  let currentIndex = 0;

  function updateSlider() {
    const slideWidth = portfolioSlider.clientWidth;
    const totalItems = portfolioList.children.length;
    const itemWidth = slideWidth / totalItems + 25;
    portfolioList.style.transform = `translateX(-${
      currentIndex * itemWidth
    }px)`;
  }

  prevBtn.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + portfolioList.children.length) %
      portfolioList.children.length;
    updateSlider();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % portfolioList.children.length;
    updateSlider();
  });

  window.addEventListener("resize", updateSlider);
  updateSlider();
});
