const issues = document.querySelectorAll(".issue");

issues.forEach(issue => {
  issue.addEventListener("click", () => {
    const solution = issue.querySelector(".solution");
    solution.classList.toggle("hidden");
  });
});
// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const targetID = anchor.getAttribute('href').substring(1);
    document.getElementById(targetID).scrollIntoView({ behavior: 'smooth' });
  });
});
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
