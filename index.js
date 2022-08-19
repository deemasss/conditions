const firstNumber = +prompt('Enter fisrt number');
const operation = prompt('Enter operation + - * /');
const secondNumber = +prompt('Enter second number');

if (firstNumber !== NaN && secondNumber !== NaN) {

    if (operation === '+') {

        let result = firstNumber + secondNumber;
        alert(`Your result is ${result}`);
    
    } else if (operation === '-') {
    
        let result = firstNumber - secondNumber;
        alert(`Your result is ${result}`);
    
    } else if (operation === '*') {
    
        let result = firstNumber * secondNumber;
        alert(`Your result is ${result}`);
    
    } else if (operation === '/') {
    
        let result = firstNumber / secondNumber;
        alert(`Your result is ${result}`);
    
    } else {
    
        alert('This operation is not exist')
    
    }

} else {

    alert('NaN');

};


