const nav = document.querySelector(".nav");
const navExpandIcon = document.querySelector(".nav__expand");
const navListItems = Array.from(
  document.querySelectorAll(".nav__list_item")
).slice(1);

navExpandIcon.addEventListener("click", () =>
  nav.classList.toggle("nav-closed")
);

const setItemAsActive = (item) => {
  navListItems.forEach((item) =>
    item.classList.remove("nav__list_item-active")
  );

  item.classList.add("nav__list_item-active");
};

navListItems.forEach((item) =>
  item.addEventListener("click", () => setItemAsActive(item))
);
