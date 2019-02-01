"use strict";


let number = parseInt(prompt('Введите число'));
// let number_2 = number % 10;
// let word_1 = 'рубль';
// let word_2 = 'рубля';
// let word_3 = 'рублей';
// if (number_2 === 2 || number_2 === 3 || number_2 === 4){
// 	alert(`Ваша сумма в ${number} ${word_2} успешно зачислена`);
// }
// else if (number === 0 || (number >= 5 && number <= 20)) {
// 	alert(`Ваша сумма в ${number} ${word_3} успешно зачислена`);
// }
// else if (number_2 === 1){
// 	alert(`Ваша сумма в ${number} ${word_1} успешно зачислена`);
// }
// else {
// 	alert(`Ваша сумма в ${number} ${word_3} успешно зачислена`);
// }

function putMoney(number) {
    let number_2 = number % 10;
    let word_1 = 'рубль';
    let word_2 = 'рубля';
    let word_3 = 'рублей';
		if (number_2 === 2 || number_2 === 3 || number_2 === 4){
			return alert(`Ваша сумма в ${number} ${word_2} успешно зачислена`);
		}
		else if (number === 0 || (number >= 5 && number <= 20)) {
			return alert(`Ваша сумма в ${number} ${word_3} успешно зачислена`);
		}
		else if (number_2 === 1){
			return alert(`Ваша сумма в ${number} ${word_1} успешно зачислена`);
		}
		else {
			return alert(`Ваша сумма в ${number} ${word_3} успешно зачислена`);
		}
}
console.log(putMoney(number));
