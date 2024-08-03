const darkBtn = document.getElementById("dark");

function gridView() {
  const container = document.querySelector(".container");
  container.classList.add("gridView");
  container.classList.remove("columnView");
}

function columnView() {
  const container = document.querySelector(".container");
  container.classList.add("columnView");
}

function darkMode() {
  const body = document.querySelector("body");
  const header = document.querySelector("header"); //include header
  body.classList.toggle("darkMode");
  header.classList.toggle("darkModeHeader"); //header css class

  if (body.classList.contains("darkMode")) {
    darkBtn.innerText = "LightMode";
  } else {
    darkBtn.innerText = "DarkMode";
  }
}

function refresh() {
  const container = document.querySelector(".container");
  container.classList.remove("columnView");
  container.classList.remove("gridView");
}

function toggleView() {
  const header = document.querySelector("header");
  header.classList.toggle("displayHidden");
}
