export function setMenu () {
    const content = document.getElementById("content");

    // clear everything in content
    content.innerHTML = "";

    const menuTitle = document.createElement("h1")
    menuTitle.textContent = "Our Menu";
    content.appendChild(menuTitle)

    const drinks = document.createElement("div");
    drinks.textContent = "Drinks"
    content.appendChild(drinks);

    const food = document.createElement("div");
    food.textContent = "Food"
    content.appendChild(food);
}