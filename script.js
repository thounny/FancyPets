"use strict";

let pets = [
  {
    name: "Rubby",
    type: "Dog",
    breed: "Corgi",
    bestTrick: "Roll over",
    image: "",
  },
  {
    name: "KitKit",
    type: "Cat",
    breed: "Mixed",
    bestTrick: "Commanding his owner to feed him",
    image: "",
  },
];

window.onload = function () {
  displayPets();
};

function displayPets() {
  const petsContainer = document.getElementById("petsContainer");

  for (let pet of pets) {
    // Create the card structure
    let card = document.createElement("div");
    card.className = "col-md-4 mb-4";

    card.innerHTML = `
            <div class="card h-100">
                <img src="${pet.image}" class="card-img-top" alt="${pet.name}">
                <div class="card-body">
                    <h5 class="card-title">${pet.name}</h5>
                    <p class="card-text"><strong>Type:</strong> ${pet.type}</p>
                    <p class="card-text"><strong>Breed:</strong> ${pet.breed}</p>
                    <p class="card-text"><strong>Best Trick:</strong> ${pet.bestTrick}</p>
                </div>
            </div>
        `;

    // Append the card to the container
    petsContainer.appendChild(card);
  }
}
