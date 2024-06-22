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

//document.querySelector("#favorite-foods").appendChild(favoriteFood1);
//document.querySelector("#favorite-foods").appendChild(favoriteFood2);
//document.querySelector("#favorite-foods").appendChild(favoriteFood3);
//document.querySelector("#favorite-foods").appendChild(favoriteFood4);


// .forEach loop
const foodsElement = document.querySelector('#favorite-foods');
function createandAppendFoodItem(food) {
    let favoriteFood = document.createElement('li');
    favoriteFood.textContent = food;
    foodsElement.appendChild(favoriteFood);
}
{
myInfo.favoriteFoods.forEach(createandAppendFoodItem);
}

/*
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

    // The map example could be simplified as below:
    const foodsElement = document.querySelector("#favorite-foods");
    const foodListElements = myInfo.favoriteFoods.map((food) => `<li>${food}</li>`);
    // we need to flatten the array of strings into one big string. .join does this.
    foodsElement.innerHTML = foodListElements.join("");

    // OR we could in fact simplify this down to one line!
    document.querySelector("#favorite-foods").innerHTML = myInfo.favoriteFoods
    .map((food) => `<li>${food}</li>`)
    .join("");

    // reusable example
myInfo = {
  name: "Brother T",
  photo: "images/photo.jpg",
  favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
  hobbies: ["Reading", "Fishing", "Camping"],
  placesLived: [
    {
      place: "Rexburg, ID",
      length: "5 years",
    },
    {
      place: "Ammon, ID",
      length: "3 years",
    },
    {
      place: "Sandy, UT",
      length: "1 year",
    },
  ],
};
const foodsElement = document.querySelector("#favorite-foods");
const placesElement = document.querySelector("#places-lived");
// requires a list, and a callback that will produce an html string for each item in the list
// returns a string of html
function generateListMarkup(list, templateCallback) {
  const htmlList = list.map(templateCallback);
  return htmlList.join("");
}
// requires an food string
// returns that string embedded in HTML markup
function foodsTemplate(food) {
  return `<li>${food}</li>`;
}

// requires an place string
// returns that string embedded in HTML markup
function placesTemplate(place) {
  return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

foodsElement.innerHTML = generateListMarkup(
  myInfo.favoriteFoods,
  foodsTemplate
);
placesElement.innerHTML = generateListMarkup(
  myInfo.placesLived,
  placesTemplate
);
*/