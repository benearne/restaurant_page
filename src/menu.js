export function setMenu () {
    const content = document.getElementById("content");

    // clear everything in content
    content.innerHTML = "";

    const menuTitle = document.createElement("h1")
    menuTitle.textContent = "Our Menu";
    content.appendChild(menuTitle)

    const menu = document.createElement("ul");
    menu.classList.add("menu");
    content.appendChild(menu);

    const foodAndDrinks = {
        Drinks: [
            "Coke", 
            "Coffee",
            "Tea",
            "Beer",
        ],
        Food: [
            "Burger",
            "Spaghetti",
            "Salad",
        ],
        Deserts: [
            "Panna cotta",
            "Tiramsu",
            "Ice Cream",
        ],
    };

    for (const category in foodAndDrinks) {
        const categoryItem = document.createElement("li");
        categoryItem.textContent = category;
        categoryItem.classList.add("foodCategory");
        menu.appendChild(categoryItem);

        const sublist = document.createElement("ul");
        categoryItem.appendChild(sublist);

        for (const item of foodAndDrinks[category]) {
            const itemElement = document.createElement("li");
            itemElement.textContent = item;
            itemElement.classList.add("foodItem");
            sublist.appendChild(itemElement);
        }
    }
}