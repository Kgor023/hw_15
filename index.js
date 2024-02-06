
//основное задание
/* var firstNumber = Number(prompt('Введите 1 число'));
var secondNumber = Number(prompt('Введите 2 число'));
var thirdNumber = Number(prompt('Введите 3 число'));
var result = prompt('Числа сложить или умножить?');
if (result == 'сложить') {
    alert(`Сумма равна ${firstNumber + secondNumber + thirdNumber}`);
} else if (result == 'умножить') {
    alert(`Произведение равно ${firstNumber * secondNumber * thirdNumber}`);
} else {
    alert('Дан невреный ответ на вопрос');
} */

//задание со *
var firstNumber = (prompt('Введите 1 число'));
var secondNumber = (prompt('Введите 2 число'));
var thirdNumber = (prompt('Введите 3 число'));

if (firstNumber === '') {
    firstNumber = Number(prompt('Введите  число еще раз'));

} else if (secondNumber === '') {
    secondNumber = Number(prompt('Введите  число еще раз'));

} else if (thirdNumber === '') {
    thirdNumber = Number(prompt('Введите  число еще раз'));

} else if (firstNumber === '' && secondNumber === '' && thirdNumber === '') {
    alert('Пока');
} else if (firstNumber === null || secondNumber === null || thirdNumber === null) {
    var text = prompt('Почему вы отменили?');
    alert(`Я понял вашу причину "${text}", всего доброго...`);
} else if (Number(firstNumber) === NaN && Number(secondNumber) === NaN && Number(thirdNumber) === NaN) {
    alert('Были введены некорректные данные');
}