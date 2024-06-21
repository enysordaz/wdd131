myInfo = {
    name: "Enys Ordaz",
    photo: "images/me.jpg",
    favoriteFoods: ["Korean BBQ", "Fried Chicken", "Ramen", "Tacos", "Funeral Potatoes"],
    hobbies: ["Painting", "Reading", "Hiking"],
    placesLived: [
        {
            place: "Merida, Yuc",
            length: "19 years",
        },
        {
            place: "Heber City, UT",
            length: "2 years",
        },
    ],
};

let favoriteFood1 = document.createElement("li");
favoriteFood1.textContent = myInfo.favoriteFoods[0];

let favoriteFood2 = document.createElement("li");
favoriteFood2.textContent = myInfo.favoriteFoods[1];

let favoriteFood3 = document.createElement("li");
favoriteFood3.textContent = myInfo.favoriteFoods[2];

let favoriteFood4 = document.createElement("li");
favoriteFood4.textContent = myInfo.favoriteFood4[3];

let favoriteFood5 = document.createElement("li");
favoriteFood5.textContent = myInfo.favoriteFoods[4];

document.querySelector("#favorite-foods").appendChild(favoriteFood1);
document.querySelector("#favorite-foods").appendChild(favoriteFood2);
document.querySelector("#favorite-foods").appendChild(favoriteFood3);
document.querySelector("#favorite-foods").appendChild(favoriteFood4);


// .forEach loop
const foodsElement = document.querySelector('#favorite-foods');
function createandAppendFoodItem(food) {
    let favoriteFood = document.createElement('li');
    favoriteFood.textContent = food;
    foodsElement.appendChild(favoriteFood);
}
myInfo.favoriteFoods.forEach(createandAppendFoodItem);


    const foodsElement = document.querySelector('#favorite-foods');
    function mapFoodItem(food) {
        let favoriteFood = document.createElement('li');
        favoriteFood.textContent = food;
        return favoriteFood;
    }
    function mapFoodItemSmall(food) {
        return `<li>${food}</li>`;
    }
    const foodListElements = myInfo.favoriteFoods.map(mapFoodItem);

    foodsElement.innerHTML = foodListElements.join('');