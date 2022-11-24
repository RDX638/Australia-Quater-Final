const bar = document.querySelector("#burger");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar != null) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
    bar.replaceChild(bar.children(), "X");
  });
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
