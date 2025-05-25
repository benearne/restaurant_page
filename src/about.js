export function setAbout () {
    const content = document.getElementById("content");

    // clear everything in content
    content.innerHTML = "";

    const aboutRestaurant = document.createElement("h1")
    aboutRestaurant.textContent = "About our Restaurant";
    content.appendChild(aboutRestaurant)

    const historyRestaurant = document.createElement("p");
    historyRestaurant.textContent = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    content.appendChild(historyRestaurant);
}