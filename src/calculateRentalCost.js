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
  const totalCost = 40;
  const bigSale = 50;
  const smallSale = 20;
  let result = 0;

  if (days >= 7) {
    result = totalCost * days - bigSale;
  } else if (days < 7) {
    result = totalCost * days - smallSale;
  }

  if (days < 3) {
    result = totalCost * days;
  }

  return result;
}

module.exports = calculateRentalCost;
