

function declareBtns() {
  let burger_btn = document.querySelector("#burger");
  let nav_open = document.querySelector("#nav_open");
  burger_btn.addEventListener("click", function () {
    //
    nav_open.style.display != "block"
      ? (nav_open.style.display = "block")
      : (nav_open.style.display = "none");
  });
}

declareBtns();
