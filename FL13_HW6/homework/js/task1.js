

let money = prompt("Сумма замовленя?");

while (money < 0) {
	{
		alert("Відємне значення неможливе!");
	}
	money = prompt("Сумма замовленя?");
}

var percentage = prompt("Скільки відсотків чайових бажаєте залишити?");


while (percentage > 99) {
	{
		alert("Забагато чайових!");
	}
	percentage = prompt("Скільки відсотків чайових бажаєте залишити?");
}

while (percentage < 0) {
	{
		alert("Відємне значення неможливе!");
	}
	percentage = prompt("Скільки відсотків чайових бажаєте залишити?");
}


let result = ((money / 100) * percentage);
let summ = ((Number(money) + result));


alert(('Сумма замовлення:' + money + '.') + '\n' +
	('Відсоток чайових:' + percentage + '.') + '\n' + ('Сумма чайових:' + result + '.') + '\n' + ('Загальна вартість:' + summ + '.'));





