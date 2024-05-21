const form = document.getElementById("form")

console.log(form)

function bmi_calc(){
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;

    const heightInMeters = height / 100;
    const totalBMI = weight / (heightInMeters**2)


    console.log(heightInMeters);
    console.log(totalBMI)
}

let number = totalBMI
let roundedNumber = number.toFixed(3);
console.log(roundedNumber);