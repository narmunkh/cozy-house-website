const petsData = [
    {
        "id": 1,
        "type": "Dog",
        "age": 2,
        "breed": "Labrador",
        "location": "New York",
        "name": "Buddy",
        "gender": "Male",
        "description": "Friendly and energetic. Great with kids.",
        "image": "images/Dog.png"
    },
    {
        "id": 2,
        "type": "Cat",
        "age": 1,
        "breed": "Siamese",
        "location": "San Francisco",
        "name": "Katrine",
        "gender": "Female",
        "description": "Loves to play and enjoys napping in the sun.",
        "image": "images/Katrine.png"
    },
    {
        "id": 3,
        "type": "Dog",
        "age": 3,
        "breed": "Golden Retriever",
        "location": "Boston",
        "name": "Max",
        "gender": "Male",
        "description": "Very affectionate and loves outdoor activities.",
        "image": "images/Woody.png"
    },
    {
        "id": 4,
        "type": "Dog",
        "age": 4,
        "breed": "Beagle",
        "location": "Los Angeles",
        "name": "Charlie",
        "gender": "Male",
        "description": "Curious and loves to explore.",
        "image": "images/Jennifer.png"
    },
    {
        "id": 5,
        "type": "Cat",
        "age": 2,
        "breed": "Persian",
        "location": "Chicago",
        "name": "Lily",
        "gender": "Female",
        "description": "Quiet and loves to be pampered.",
        "image": "images/Pets.png"
    },
    {
        "id": 6,
        "type": "Dog",
        "age": 5,
        "breed": "Boxer",
        "location": "Miami",
        "name": "Rocky",
        "gender": "Male",
        "description": "Loyal and protective.",
        "image": "images/Dog_donate.png"
    },
    {
        "id": 7,
        "type": "Cat",
        "age": 3,
        "breed": "Maine Coon",
        "location": "Seattle",
        "name": "Misty",
        "gender": "Female",
        "description": "Independent but loves attention.",
        "image": "images/Pets.png"
    },
    {
        "id": 8,
        "type": "Dog",
        "age": 2,
        "breed": "Dachshund",
        "location": "Austin",
        "name": "Bella",
        "gender": "Female",
        "description": "Playful and loves cuddles.",
        "image": "images/Woody.png"
    },
    {
        "id": 9,
        "type": "Cat",
        "age": 4,
        "breed": "Bengal",
        "location": "Denver",
        "name": "Simba",
        "gender": "Male",
        "description": "Active and enjoys interactive toys.",
        "image": "images/Katrine.png"
    },
    {
        "id": 10,
        "type": "Dog",
        "age": 1,
        "breed": "Pug",
        "location": "Atlanta",
        "name": "Daisy",
        "gender": "Female",
        "description": "Loves food and nap time.",
        "image": "images/Jennifer.png"
    },
    {
        "id": 11,
        "type": "Cat",
        "age": 5,
        "breed": "Russian Blue",
        "location": "New York",
        "name": "Shadow",
        "gender": "Male",
        "description": "Shy at first but very affectionate once comfortable.",
        "image": "images/Pets.png"
    },
    {
        "id": 12,
        "type": "Dog",
        "age": 6,
        "breed": "Siberian Husky",
        "location": "Philadelphia",
        "name": "Luna",
        "gender": "Female",
        "description": "Energetic and loves to howl.",
        "image": "images/Dog_donate.png"
    },
    {
        "id": 13,
        "type": "Cat",
        "age": 1,
        "breed": "Sphynx",
        "location": "San Diego",
        "name": "Gizmo",
        "gender": "Male",
        "description": "Loves warmth and being the center of attention.",
        "image": "images/Pets.png"
    },
    {
        "id": 14,
        "type": "Dog",
        "age": 7,
        "breed": "French Bulldog",
        "location": "Dallas",
        "name": "Zoe",
        "gender": "Female",
        "description": "Calm and loves leisurely walks.",
        "image": "images/Woody.png"
    },
    {
        "id": 15,
        "type": "Cat",
        "age": 2,
        "breed": "Scottish Fold",
        "location": "Portland",
        "name": "Oliver",
        "gender": "Male",
        "description": "Playful and enjoys lounging in cozy spots.",
        "image": "images/Katrine.png"
    }
];


function populateDropdown(elementId, options) {
    const select = document.getElementById(elementId);
    if (!select) return; // Check if the element exists
    select.innerHTML = options.map(option => `<option value="${option}">${option}</option>`).join('');
    // Add 'Any' option for all dropdowns at the beginning
    select.insertAdjacentHTML('afterbegin', `<option value="">Any</option>`);
}

function populateDropdownsOnce(pets) {
    const types = getUniqueValues(pets, 'type');
    const breeds = getUniqueValues(pets, 'breed');
    const locations = getUniqueValues(pets, 'location');
    const genders = getUniqueValues(pets, 'gender');
    
    populateDropdown('type', types);
    populateDropdown('breed', breeds);
    populateDropdown('location', locations);
    populateDropdown('gender', genders);
}

function getUniqueValues(pets, key) {
    return Array.from(new Set(pets.map(pet => pet[key])));
}

function displayPets(pets) {
    const petsContainer = document.querySelector('.pets_slider');
    petsContainer.innerHTML = ''; // Clear existing pets

    pets.forEach(pet => {
        const petElement = document.createElement('div');
        petElement.className = 'slide';
        petElement.innerHTML = `
            <figure><img src="${pet.image}" width="270" /></figure>
            <p>${pet.name}</p><a>Learn more</a>
        `;
        petsContainer.appendChild(petElement);
    });
}   

function filterPets() {
    const type = document.getElementById('type').value;
    const breed = document.getElementById('breed').value;
    const location = document.getElementById('location').value;
    const gender = document.getElementById('gender').value;
    const ageMin = parseInt(document.getElementById('ageMin').value, 10);
    const ageMax = parseInt(document.getElementById('ageMax').value, 10);

    const filteredPets = petsData.filter(pet => {
        return (type === '' || pet.type === type) &&
               (breed === '' || pet.breed === breed) &&
               (location === '' || pet.location === location) &&
               (gender === '' || pet.gender === gender) &&
               (pet.age >= ageMin && pet.age <= ageMax);
    });

    displayPets(filteredPets);
}

// Call the populateDropdownsOnce function to initialize the dropdowns
document.addEventListener('DOMContentLoaded', function() {
    populateDropdownsOnce(petsData);
    displayPets(petsData);
    document.getElementById('filterForm').addEventListener('change', filterPets);
});
