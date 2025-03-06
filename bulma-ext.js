"use strict";

// Add navbar burger functionality.
const navbarBurger = document.querySelector(".navbar-burger");
if (navbarBurger) {
  const navbarMenu = document.querySelector(".navbar-menu");
  navbarBurger.addEventListener("click", () => {
    navbarBurger.classList.toggle("is-active");
    navbarMenu.classList.toggle("is-active");
    navbarBurger.ariaExpanded = navbarBurger.ariaExpanded !== "true";
  });
}

// Remove danger styling when form controls change.
document.querySelectorAll(".input, .select, .textarea, .file")
    .forEach(control => {
  control.addEventListener("input", () => {
    control.classList.remove("is-danger");
  });
  control.addEventListener("change", () => {
    control.classList.remove("is-danger");
  });
});

// Remove error messages when form controls change.
document.querySelectorAll(".field").forEach(field => {
  field.addEventListener("input", () => {
    field.querySelectorAll(".help.is-danger").forEach(help => {
      help.remove();
    });
  });
  field.addEventListener("change", () => {
    field.querySelectorAll(".help.is-danger").forEach(help => {
      help.remove();
    });
  });
});

// Update file names when file inputs change.
document.querySelectorAll(".file.has-name").forEach(fileContainer => {
  const fileName = fileContainer.querySelector(".file-name");
  const defaultFileName = fileName.textContent;
  const fileInput = fileContainer.querySelector(".file-input");
  fileInput.addEventListener("change", () => {
    fileName.textContent = fileInput.files.length > 0 ?
      fileInput.files[0].name : defaultFileName;
  });
});
