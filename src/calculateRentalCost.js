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
  const dayCarCosts = 40;
  const threeDaysMoreDiscount = 20;
  const sevenDaysMoreDiscount = 50;

  if (days <= 0) {
    return 'Введите число бльше 0';
  }

  if (days <= 2) {
    return days * dayCarCosts;
  }

  if (days >= 3 && days <= 6) {
    return days * dayCarCosts - threeDaysMoreDiscount;
  }

  if (days >= 7) {
    return days * dayCarCosts - sevenDaysMoreDiscount;
  }
}

module.exports = calculateRentalCost;
