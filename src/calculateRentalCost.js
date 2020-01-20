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
  const dailyRent = 40;
  const discontForThree = 20;
  const discontForSeven = 50;

  if (days >= 7) {
    return days * dailyRent - discontForSeven;
  } else {
    if (days >= 3) {
      return days * dailyRent - discontForThree;
    } else {
      return days * dailyRent;
    }
  }
}

module.exports = calculateRentalCost;
