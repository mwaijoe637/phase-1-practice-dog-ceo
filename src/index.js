document.addEventListener("DOMContentLoaded", function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
        const dogImages = data.message;

        // Add image elements to the DOM
        const dogImageContainer = document.getElementById("dog-image-container");
        dogImages.forEach(imageUrl => {
            const imgElement = document.createElement("img");
            imgElement.src = imageUrl;
            dogImageContainer.appendChild(imgElement);
        });
    })
    .catch(error => console.error("Error fetching dog images:", error));
});

const breedUrl = "https://dog.ceo/api/breeds/list/all";

fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
        const dogBreeds = Object.keys(data.message);

        // Add breeds to the <ul> in index.html
        const dogBreedsList = document.getElementById("dog-breeds");
        dogBreeds.forEach(breed => {
            const liElement = document.createElement("li");
            liElement.textContent = breed;
            dogBreedsList.appendChild(liElement);
        });
    })
    .catch(error => console.error("Error fetching dog breeds:", error));

    document.addEventListener("DOMContentLoaded", function() {

        const dogBreedsList = document.getElementById("dog-breeds");
    dogBreedsList.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            event.target.style.color = "blue"; // Change the color to blue (or any color you prefer)
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {

    const breedDropdown = document.getElementById("breed-dropdown");
    breedDropdown.addEventListener("change", function(event) {
        const selectedLetter = event.target.value;

        // Hide all breeds
        const allBreeds = document.querySelectorAll("#dog-breeds li");
        allBreeds.forEach(breed => {
            breed.style.display = "none";
        });

        // Show breeds that start with the selected letter
        const selectedBreeds = document.querySelectorAll(`#dog-breeds li[data-letter="${selectedLetter}"]`);
        selectedBreeds.forEach(breed => {
            breed.style.display = "block";
        });
    });
});