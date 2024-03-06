const tabs = document.querySelectorAll(".tab");
const buttons = document.querySelectorAll("button");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].style.display = "none";
}

function showTab(e, id) {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
    tabs[i].classList.remove("active");
  }

  document.getElementById(id).style.display = "block";

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("selected-button");
  }
  
  e.currentTarget.classList.add("selected-button");
}
