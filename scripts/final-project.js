// Get the date for the footer
const year = document.querySelector("#currentyear");

// use the date object
const today = new Date();
currentyear.innerHTML = `${today.getFullYear()}`;

// Hamburger button
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


// Programs array
const program = [
	{
		id: "bwst-6",
		name: "Body Weight Strength Training",
	},
	{
		id: "cwst-7",
		name: "Cable Suspention Training",
	},
	{
	  id: "fst-1",
	  name: "Functional Strength Training",
	},
	{
	  id: "rtb-2",
	  name: "Resistance Training",
	},
	{
	  id: "wstp-4",
	  name: "Weighted Strength Training",
	},
];
  
// To be able to display and choose a product from the array
const programChoose = document.querySelector('#program');
  
program.forEach((program) => {
	let option = document.createElement('option');
	option.value = program.id;
	option.innerHTML = program.name;
	programChoose.appendChild(option);
});
  
// Function to track form submissions using localStorage
function trackFormSubmissions() {
	let registerCounter = localStorage.getItem('registerCounter');
	if (!registerCounter) {
	  registerCounter = 0;
	} else {
	  registerCounter = parseInt(registerCounter, 10);
	}
	registerCounter += 1;
	localStorage.setItem('registerCounter', registerCounter);
	return registerCounter;
}
  
// Function to display the thank you message
function displayThankYouMessage(programName, registerCounter) {
	const formContainer = document.querySelector('.pform');
	formContainer.innerHTML = `
	<p> Thanks for for reviewing the ${programName}</p>
	<p> We will contact you soon!</p>
	<p>You have registered ${registerCounter} times.</p>
	`;
}
  
document.addEventListener('DOMContentLoaded', () => {
	const reviewForm = document.querySelector('.pform');
  
	reviewForm.addEventListener('submit', (event) => {
	event.preventDefault();
  
	const chosenProgram = document.getElementById('program');
	const chosenProgramName = chosenProgram.options[chosenProgram.selectedIndex].text;
	const reviewCounter = trackFormSubmissions();
	displayThankYouMessage(chosenProgramName, reviewCounter);
	});
  
});

