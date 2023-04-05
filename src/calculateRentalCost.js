'use strict';
/**
 * Після важкого кварталу в офісі ви вирішите
 * Щоб трохи відпочити у відпустці.
 * Отже, ви забронюєте для вас рейс
 * І ваша родина і намагайтеся залишити весь безлад за собою.
 *
 * Вам знадобиться прокат автомобіля для того, щоб ви обійшли у відпустці.
 * Менеджер прокату автомобілів робить вас хорошими пропозиціями.
 *
 * Щодня ви орендуєте автомобіль, коштує 40 доларів.
 * Якщо ви орендуєте автомобіль протягом 7 і більше днів,
 * ви отримуєте 50 доларів США.
 * Крім того, якщо ви орендуєте автомобіль на 3 або більше днів,
 * Ви отримуєте 20 доларів США від загальної кількості.
 *
 * Впровадити функцію calculaterentalcost
 *, що повертає загальну суму за різні кількості днів.
 *
 * Приклади:
 * - calculaterentalcost (1) === 40
 * - calculaterentalcost (3) === 100
 * - calculaterentalcost (7) === 230
 *
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  // write code here
  const autoPrice = 40;

  if (days <= 2) {
    return autoPrice * days;
  } else if (days <= 6) {
    return autoPrice * days - 20;
  } else if (days >= 7) {
    return autoPrice * days - 50;
  }
};

module.exports = calculateRentalCost;
