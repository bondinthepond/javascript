// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

function calculateBMI(mass, height) {
  return mass / height ** 2;
}

let markBMI = 0;
let johnBMI = 0;

function form_1_Changed() {
  const markMass = document.getElementById("mark_mass").value;
  console.log("Mark's mass is " + markMass);
  const markHeight = document.getElementById("mark_height").value;
  console.log("Mark's height is " + markHeight);
  markBMI = calculateBMI(markMass, markHeight);
  console.log("Marks BMI : " + markBMI);

  document.getElementById("mark_bmi").setAttribute("value", markBMI);
}

function form_2_Changed() {
  const johnMass = document.getElementById("john_mass").value;
  console.log("John's mass is " + johnMass);
  const johnHeight = document.getElementById("john_height").value;
  console.log("John's height is " + johnHeight);

  johnBMI = calculateBMI(johnMass, johnHeight);
  console.log("John's BMI : " + johnBMI);

  document.getElementById("john_bmi").setAttribute("value", johnBMI);
}

function calculateHigher() {
  if (markBMI > johnBMI) {
    document.getElementById("tick_mark_mark").removeAttribute("hidden");
  } else if (markBMI < johnBMI) {
    document.getElementById("tick_mark_john").removeAttribute("hidden");
  }
}
