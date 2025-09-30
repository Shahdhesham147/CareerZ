function showTab(tabId) {
  document.querySelectorAll(".tab-content").forEach(c => c.style.display = "none");
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));

  document.getElementById(tabId).style.display = "block";
  event.target.classList.add("active");
}
window.onload = function() {
  showTab("overview");
};
