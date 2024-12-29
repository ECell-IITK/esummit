// Function to animate numbers
function animateNumbers(element, target, duration) {
  let start = 0; // Starting number
  const increment = target / (duration / 10); // Step size
  const interval = setInterval(() => {
    start += increment;
    if (start >= target) {
      start = target; // Stop at the target number
      clearInterval(interval);
    }
    element.innerHTML = `${Math.floor(start)}+`; // Update the content
  }, 10); // Update every 10ms
}

// Intersection Observer to detect visibility
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const child = entry.target;
          const target = parseInt(child.getAttribute("data-target"), 10); // Get target number from data attribute
          animateNumbers(child, target, 2000); // Animate over 2000ms (2 seconds)
        } else {
          // Reset the number when the element leaves the viewport
          entry.target.innerHTML = "0+";
        }
      });
    },
    { threshold: 0.5 } // Trigger animation when 50% of the element is visible
  );

  // Observe all .child_count elements
  document.querySelectorAll(".child_count").forEach((child) => {
    observer.observe(child);
  });
});
