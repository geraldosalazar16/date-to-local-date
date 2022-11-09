// Import stylesheets
import './style.css';

const dateString = '2022-11-09T18:06:13.000+00:00';
const localDate = new Date(dateString).toString();
console.log(localDate);

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>${localDate}</h1>`;
