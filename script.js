// Counter Animation
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;
    const increment = target / 100;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target + "+";
    }
  };

  updateCounter();
});

// BMI Calculator
function calculateBMI() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value / 100;
  const result = document.getElementById("bmiResult");

  if (weight <= 0 || height <= 0) {
    result.innerHTML = "Please enter valid details.";
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);
  let status = "";

  if (bmi < 18.5) status = "Underweight";
  else if (bmi < 24.9) status = "Normal";
  else if (bmi < 29.9) status = "Overweight";
  else status = "Obese";

  result.innerHTML = `Your BMI is ${bmi} - ${status}`;
}

// Admission form alert
document.querySelector(".admission-form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Admission form submitted successfully!");
  this.reset();
});