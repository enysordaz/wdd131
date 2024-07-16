
// Products array
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    avgRating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    avgRating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    avgRating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    avgRating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    avgRating: 5.0,
  },
];

// To be able to display and choose a product from the array
const productChoose = document.querySelector('#product');

products.forEach((product) => {
    let option = document.createElement('option');
    option.value = product.id;
    option.innerHTML = product.name;
    productChoose.appendChild(option);
});

// Function to track form submissions using localStorage
function trackFormSubmissions() {
  let reviewCounter = localStorage.getItem('reviewCounter');
  if (!reviewCounter) {
    reviewCounter = 0;
  } else {
    reviewCounter = parseInt(reviewCounter, 10);
  }
  reviewCounter += 1;
  localStorage.setItem('reviewCounter', reviewCounter);
  return reviewCounter;
}

// Function to display the thank you message
function displayThankYouMessage(productName, reviewCounter) {
  const formContainer = document.querySelector('.pform');
  formContainer.innerHTML = `
  <p> Thanks for for reviewing the ${productName}</p>
  <p> You have reviewed ${reviewCounter} times.</p>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const reviewForm = document.querySelector('.pform');

  reviewForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const chosenProduct = document.getElementById('product');
    const chosenProductName = chosenProduct.options[chosenProduct.selectedIndex].text;
    const reviewCounter = trackFormSubmissions();
    displayThankYouMessage(chosenProductName, reviewCounter);
  });

});
