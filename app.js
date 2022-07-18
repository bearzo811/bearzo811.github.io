let navBar_blog = document.querySelector("#blog");
let navBar_project = document.querySelector("#project");
let navBar_about = document.querySelector("#about");
let thumbnail = document.querySelector("div#thumbnail");

navBar_blog.addEventListener("mouseover", () => {
  thumbnail.className = "";
});

navBar_project.addEventListener("mouseover", () => {
  thumbnail.className = "";
  thumbnail.classList.add("pageThumbnail_project");
});

navBar_about.addEventListener("mouseover", () => {
  thumbnail.className = "";
  thumbnail.classList.add("pageThumbnail_about");
});
