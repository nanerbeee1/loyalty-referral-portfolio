const issues = document.querySelectorAll(".issue");

issues.forEach(issue => {
  issue.addEventListener("click", () => {
    const solution = issue.querySelector(".solution");
    solution.classList.toggle("hidden");
  });
});
