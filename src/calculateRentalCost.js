'use strict';

/**
 * After a hard quarter in the office you decide to get some rest
 * on a vacation. So you will book a flight for you and your girlfriend
 * and try to leave all the mess behind you.
 *
 * You will need a rental car in order for you to get around in your
 * vacation. The manager of the car rental makes you some good offers.
 *
 * Every day you rent the car costs $40. If you rent the car for 7 or
 * more days, you get $50 off your total. Alternatively, if you rent
 * the car for 3 or more days, you get $20 off your total.
 *
 * Implement calculateRentalCost function which returns the total
 * amount for different count of days.
 *
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const smallDiscount = 20;
  const discount = 50;
  const smallDiscountStart = 3;
  const discountStart = 7;

  // Не совсем понимаю зачем нужны переменные для 3 и 7. Это же и есть дни.

  if (days < smallDiscountStart) {
    return price * days;
  } else if (days >= smallDiscountStart & days < discountStart) {
    return price * days - smallDiscount;
  } else if (days >= discountStart) {
    return price * days - discount;
  }
}

module.exports = calculateRentalCost;
