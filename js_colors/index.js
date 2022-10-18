const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById ("btn");
const color = document.querySelector(".color");


btn.addEventListener('click', function() {
const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const r = randomBetween(0, 255);
const g = randomBetween(0, 255);
const b = randomBetween(0, 255);
const rgb = `rgb(${r}, ${g}, ${b})`;
document.body.style.backgroundColor = rgb;
color.textContent = rgb;
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}