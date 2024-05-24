let form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;
    let BMI = (weight / ((height*height)/ 10000)).toFixed(2);
    console.log(BMI);
    document.querySelector('#result').innerHTML = `your BMI is ${BMI}`
})