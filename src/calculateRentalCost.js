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
 * If you rent the car for 7 or more days, you get $50 of your total.
 * Alternatively, if you rent the car for 3 or more days,
 * you get $20 off your total.
 *
 * Implement calculateRentalCost function
 * which returns the total amount for different count of days.
 *
 * Examples:
 * - calculateRentalCost(1) === 40
 * - calcukateRentalCost(3) === 100
 * - calculateRentalCost(7) === 230
 *
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const totalCost = days * 40;
  const discount20 = totalCost - 20;
  const discount50 = totalCost - 50;

  if (days < 3) {
    return totalCost;
  } else if (days >= 3 && days < 7) {
    return discount20;
  } else {
    return discount50;
  }
}

module.exports = calculateRentalCost;
