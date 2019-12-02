let money = prompt('Ваш месячный доход?');
let income = 'Дополнительный доход: 80000';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', '0');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 2000000;
let period = 8;
console.log(money);
console.log(income);
console.log(deposit);
let firstQuestion1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let secondQuestion1 = prompt('Во сколько это обойдется?');
let firstQuestion2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let secondQuestion2 = prompt('Во сколько это обойдется?');
console.log(budgetMonth = money - secondQuestion1 - secondQuestion2);
console.log(Math.ceil(mission / budgetMonth));
console.log('Период ' + period + ' месяцев. ' + 'Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase().split(' '));
let budgetDay = budgetMonth / 30;
console.log(Math.floor(budgetDay));
let restBudgetDay = money % 30;
console.log(restBudgetDay);

if (budgetDay < 800) {
    console.log('Высокий уровень дохода');
} else if (budgetDay > 300 && budgetDay <= 800) {
    console.log('Средний уровень дохода');
} else if (budgetDay > 0 && budgetDay <= 300) {
    console.log('Низкий уровень дохода');
} else {
    console.log('Что-то пошло не так');
}