'use strict';

/**
 * After a hard quarter in the office you decide
 * to get some rest on a vacation.
 * So you will book a flight for you
 * and your family and try to leave all the mess behind you.
 *
 * You will need a rental car in order for you to get around in your vacation.
 * The manager of the car rental makes you some good offers.
 *
 * Every day you rent the car costs $40.
 * If you rent the car for 7 or more days, you get $50 off your total.
 * Alternatively, if you rent the car for 3 or more days,
 * you get $20 off your total.
 *
 * Implement calculateRentalCost function
 * which returns the total amount for different count of days.
 *
 * Examples:
 *  - calculateRentalCost(1) === 40
 *  - calculateRentalCost(3) === 100
 *  - calculateRentalCost(7) === 230
 *
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  let res = 0;

  for (let i = 0; i < days; i++) {
    res += 40;

    if (i === 6) {
      res -= 50;
    }

    if (i === 2 && days < 7) {
      res -= 20;
    }
  }

  return res;
}

// console.log(calculateRentalCost(4));
// console.log(calculateRentalCost(2)); // 80
// console.log(calculateRentalCost(3));// 100
// console.log(calculateRentalCost(6)); // 220
// console.log(calculateRentalCost(7)); // 230

module.exports = calculateRentalCost;

// После тяжелой четверти в офисе вы решаете
//    чтобы немного отдохнуть в отпуске.
//    Таким образом, вы забронируете рейс для вас
//    и свою семью и постарайтесь оставить весь беспорядок позади.

//    Вам понадобится арендованный автомобиль, чтобы передвигаться в отпуске.
//    Менеджер по прокату автомобилей делает вам несколько выгодных предложений.

//    Каждый день аренды автомобиля стоит 40 долларов.
//    Если вы арендуете автомобиль на 7 или более дней,
// вы получаете скидку 50 долларов США.
//    В качестве альтернативы, если вы арендуете автомобиль на 3 и более дней,
//    вы получаете 20 долларов от общей суммы.

//    Реализовать функцию calculateRentalCost
//    который возвращает общую сумму за разное количество дней
