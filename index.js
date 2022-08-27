const firstNumber = parseInt(prompt('Enter fisrt number'));
const operator = prompt('Choose operator + - * /');
const secondNumber = parseInt(prompt('Enter second number'));

if (isNaN(firstNumber) || isNaN(secondNumber)) {

    alert('Your fisrt or second number is incorrect');

}

if (operator === '+') {

    let result = firstNumber + secondNumber;
    alert(`Your result is ${result}`);
        
} else if (operator === '-') {
        
    let result = firstNumber - secondNumber;
    alert(`Your result is ${result}`);
        
} else if (operator === '*') {
        
    let result = firstNumber * secondNumber;
    alert(`Your result is ${result}`);
        
} else if (operator === '/') {
        
    let result = firstNumber / secondNumber;
    alert(`Your result is ${result}`);
        
} else {
        
    alert('This operation is not exist')
            
}