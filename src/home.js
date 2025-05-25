import pizzaImage from "./pizza.png";

export function setHome () {
    const content = document.getElementById("content");

    // clear everything in content
    content.innerHTML = "";

    const restaurantName = document.createElement("h1")
    restaurantName.textContent = "Pizza Pizza Balla Balla";
    content.appendChild(restaurantName)

    const restDescription = document.createElement("p");
    restDescription.textContent = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    content.appendChild(restDescription);

    const pizzaPic = document.createElement("img");
    pizzaPic.src = pizzaImage
    pizzaPic.alt = "pizza";
    content.appendChild(pizzaPic)
}


