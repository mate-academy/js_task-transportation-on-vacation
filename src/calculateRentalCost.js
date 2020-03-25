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
 *2 80
 *3 100
 *6 220
 *7 230
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let sum = 0;

  days > 6 ? sum -= 50 : days > 2 ? sum -= 20 : sum -= 0;

  // eslint-disable-next-line no-unmodified-loop-condition
  while (days > 0) {
    sum += 40;

    // eslint-disable-next-line no-param-reassign
    days--;
  }

  return sum;
}

module.exports = calculateRentalCost;
