let rigisterbtn = document.getElementById("register");
let container = document.getElementById("container");
let loginbtn = document.getElementById("login");

rigisterbtn.addEventListener("click", () => {
  container.classList.add("active");
});
loginbtn.addEventListener("click", () => {
  container.classList.remove("active");
});
