'use strict';
/* eslint-disable */

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
  let saleFor7Days = 50;
  let saleFor3Days = 20;
  let oneDayCost = 40;
  if (days >= 7) {
    return days * oneDayCost - saleFor7Days;
  } else if (days >= 3 && days <= 6) {
    return days * oneDayCost - saleFor3Days;
  }
    return days * oneDayCost;
}

module.exports = calculateRentalCost;
