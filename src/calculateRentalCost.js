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
 * Every day you rent the car costs $dailyCost.
 * Alternatively, if you rent the car for bigWeekend or more days,
 * you get $minSale off your total.
 *
 * Implement calculateRentalCost function
 * which returns the total amount for different count of days.
 *
 * Examples:
 *  - calculateRentalCost(1) === dailyCost
 *  - calculateRentalCost(bigWeekend) === 100
 *  - calculateRentalCost(weekend) === 2bigWeekend0
 *
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const dailyCost = 40;
  const minSale = 20;
  const maxSale = 50;
  const bigWeekend = 3;
  const weekend = 7;

  if (days >= bigWeekend && days < weekend) {
    return days * dailyCost - minSale;
  }

  if (days >= weekend) {
    return days * dailyCost - maxSale;
  }

  if (days < bigWeekend && days > 0) {
    return days * dailyCost;
  } else {
    return 0;
  }
}
module.exports = calculateRentalCost;
