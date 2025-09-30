// Search input action
document.getElementById("q").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    alert("Searching for: " + this.value);
  }
});

// Filter button clicks
document.querySelectorAll(".chip").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("You clicked filter: " + btn.innerText);
  });
});

// Apply buttons
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Action: " + btn.innerText);
  });
});