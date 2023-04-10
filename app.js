const button = document.getElementById("btn");
const color = document.querySelectorAll(".color");
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

button.addEventListener("click", function () {
  const randomIndex = randomNumber();

  document.body.style.backgroundColor = colors[randomIndex];

  // loop through the color NodeList and set the textContent of each element
  color.forEach(function (element) {
    element.textContent = colors[randomIndex];
  });
});

const randomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};


console.log(randomNumber);
