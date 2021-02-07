document.addEventListener("DOMContentLoaded", (event) => {
  const $body = document.getElementsByTagName("body")[0];

  const $menuBurgerController = document.getElementById("menu__mobile-handler");

  const $menuList = document.getElementsByClassName("menu__list")[0];

  $menuBurgerController.addEventListener("change", () =>
    $body.classList.toggle("no-scroll")
  );

  $menuList.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      removeMenuSelected();
      event.target.classList.add("-active");
    }
  });
});

const removeMenuSelected = () => {
  const $previousSelected = document.getElementsByClassName(
    "menu__list-item__link -active"
  )[0];

  if ($previousSelected) $previousSelected.classList.remove("-active");
};
