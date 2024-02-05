const buttonMenu = document.getElementsByClassName("menu_head")[0];

buttonMenu.addEventListener("click", function () {
  console.log("CLicou");
  const existingMenu = buttonMenu.querySelector(".content_menu");

  if (!existingMenu) {
    const menu = document.createElement("div");
    menu.setAttribute("class", "content_menu");
    buttonMenu.appendChild(menu);
    console.log(menu);
  } else {
    console.log(buttonMenu);
    buttonMenu.removeChild(buttonMenu.firstChild);
  }
});
