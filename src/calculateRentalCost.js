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
  const priceDay = 40;
  const rentPrice = days * priceDay;
  const bigDiscount = 50;
  const smallDiscount = 20;
  let total = rentPrice;
  const LONG_TERM = 7;
  const SMALL_TERM = 3;

  if (days >= LONG_TERM) {
    total = rentPrice - bigDiscount;
  } else if (days >= SMALL_TERM) {
    total = rentPrice - smallDiscount;
  } else if (days < SMALL_TERM) {
    return total;
  }

  return total;
}

module.exports = calculateRentalCost;
