//start ul active (nav in mobile)----------------------------------------------------

//get elements

let list_button = document.querySelector(".landing .nav i");

let ul = document.querySelector(".landing .nav .links ul");

//add class active and remove it

setInterval(function () {
  if (screen.width < 778 && scrollY < 600) {
    list_button.addEventListener("click", () => {
      ul.classList.toggle("active");
    });
  } else {
    ul.classList.remove("active");
  }
}, 100);

//end ul active----------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------

// start go up narrow----------------------------------------------------------------

let go_up = document.querySelector(".go-up");

go_up.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.onscroll = function () {
  if (window.scrollY >= 600) {
    go_up.style.display = "inline-block";
  } else {
    go_up.style.display = "none";
  }
};

//end go up narrow---------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------
