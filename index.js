const navBtn = document.getElementById("navBtn");
const navLinkGroup = document.getElementById("navLinkGroup");
navBtn.addEventListener("click", () => {
  if (navLinkGroup.style.display === "none") {
      navLinkGroup.style.display = "block"
  } else {
    navLinkGroup.style.display = "none";
  }
});
