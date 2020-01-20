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
  const ordinaryPriceForDay = 40;
  const termLongRent = 7;
  const getOffLongRent = 50;
  const termMiddleRent = 3;
  const getOffMiddleRent = 20;

  if (days >= termLongRent) {
    return days * ordinaryPriceForDay - getOffLongRent;
  }

  if (days >= termMiddleRent) {
    return days * ordinaryPriceForDay - getOffMiddleRent;
  }

  return days * ordinaryPriceForDay;
}

module.exports = calculateRentalCost;
