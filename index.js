const form = document.getElementById('form');
const age = document.getElementById('age');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const heightUnit = document.getElementById('dropdown');
const weightUnit = document.getElementById('dropdown1');
let nonEmpty = true;

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const ageValue = age.value.trim();
    const heightValue = height.value.trim();
    const weightValue = weight.value.trim();
    const heightUnitValue = heightUnit.value.trim();
    const weightUnitValue = weightUnit.value.trim();

    if(ageValue === '') {
        setError(age, '*Age is required');
        nonEmpty = false;
    } else if (ageValue < 0) {
        setError(age, '*Age cannot not be negetive');
        nonEmpty = false;
    } else {
        setSuccess(age);
    }

    if(heightValue === '') {
        setError(height, '*Height is required');
        nonEmpty = false;
    } else if (heightValue < 0) {
        setError(height, '*Height cannot not be negetive');
        nonEmpty = false;
    } else {
        setSuccess(height);
    }

    if(weightValue === '') {
        setError(weight, '*Weight is required');
        nonEmpty = false;
    } else if (weightValue < 0) {
        setError(weight, '*Weight cannot not be negetive');
        nonEmpty = false;
    } else {
        setSuccess(weight);
    }

    let male = document.getElementById('male')
    let female = document.getElementById('female')
    let text = document.getElementById('gen');
    if (!male.checked && !female.checked) {
        text.innerHTML='*Gender is required';
        nonEmpty = false;
    } else{
        text.innerHTML='';
    }

    
    if(heightUnitValue == 'feet' && weightUnitValue == 'pounds'){
        let BMI = ((weightValue / ((heightValue * heightValue)))*3.905).toFixed(2);
        let statement = document.getElementById('result-text');

        if(nonEmpty == true){
            if(BMI < 18.5){
                statement.innerText = `Your BMI is : ${BMI}, which means your weight falls in the underweight catagory.`  
            }else if((BMI > 18.5) && (BMI <= 24.9)){
                statement.innerText = `Your BMI is : ${BMI}, which means your weight falls in the normal weight catagory`;
            }else if((BMI >= 25) && (BMI <= 29.9 )){
                statement.innerText = `Your BMI is : ${BMI}, which means your weight falls in the overweight catagory`;
            }else{
                statement.innerText = `Your BMI is : ${BMI}, which means your weight falls in the obese catagory`;
            }
        }

    }
    else if(heightUnitValue == 'feet' && weightUnitValue == 'kilograms'){
        let BMI = ((weightValue / ((heightValue * heightValue)))*10.763910417).toFixed(2);
        let statement = document.getElementById('result-text');

        if(nonEmpty == true){
            if(BMI < 18.5){
                statement.innerText = `Your BMI is : ${BMI}, which means your weight falls in the underweight catagory.`  
            }else if((BMI > 18.5) && (BMI <= 24.9)){
                statement.innerText = `Your BMI is : ${BMI}, which means your weight falls in the normal weight catagory`;
            }else if((BMI >= 25) && (BMI <= 29.9 )){
                statement.innerText = `Your BMI is : ${BMI}, which means your weight falls in the overweight catagory`;
            }else{
                statement.innerText = `Your BMI is : ${BMI}, which means your weight falls in the obese catagory`;
            }
        }

    }
    else if(heightUnitValue == 'centimeters' && weightUnitValue == 'pounds'){
        let BMI = ((weightValue / ((heightValue * heightValue)/10000))*0.4539).toFixed(2);
        let statement = document.getElementById('result-text');

        if(nonEmpty == true){
            if(BMI < 18.5){
                statement.innerText = `Your BMI is : ${BMI}, which means your weight falls in the underweight catagory.`  
            }else if((BMI > 18.5) && (BMI <= 24.9)){
                statement.innerText = `Your BMI is : ${BMI}, which means your weight falls in the normal weight catagory`;
            }else if((BMI >= 25) && (BMI <= 29.9 )){
                statement.innerText = `Your BMI is : ${BMI}, which means your weight falls in the overweight catagory`;
            }else{
                statement.innerText = `Your BMI is : ${BMI}, which means your weight falls in the obese catagory`;
            }
        }

    }
    else {
        let BMI = (weightValue / ((heightValue * heightValue) / 10000)).toFixed(2);
        let statement = document.getElementById('result-text');

        if(nonEmpty == true){
            if(BMI < 18.5){
                statement.innerText = `Your BMI is : ${BMI}, which means your weight falls in the underweight catagory.`  
            }else if((BMI > 18.5) && (BMI <= 24.9)){
                statement.innerText = `Your BMI is : ${BMI}, which means your weight falls in the normal weight catagory`;
            }else if((BMI >= 25) && (BMI <= 29.9 )){
                statement.innerText = `Your BMI is : ${BMI}, which means your weight falls in the overweight catagory`;
            }else{
                statement.innerText = `Your BMI is : ${BMI}, which means your weight falls in the obese catagory`;
            }
        }
    }

    nonEmpty = true;
};