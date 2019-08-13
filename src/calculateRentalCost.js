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
  // write code here
  let totalCost = 0;
  const daylyPrice = 40;
  const price = days * daylyPrice;
  const discount3Days = 20;
  const discount7Days = 50;

  if (days >= 3 && days < 7) {
    totalCost = price - discount3Days;
  } else if (days >= 7) {
    totalCost = price - discount7Days;
  } else {
    totalCost = price;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
