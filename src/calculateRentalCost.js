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
 * If you rent the car for 7 or more days, you get $50 off your totalAmount.
 * Alternatively, if you rent the car for 3 or more days,
 * you get $20 off your totalAmount.
 *
 * Implement calculateRentalCost function
 * which returns the totalAmount amount for different count of days.
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
  const firstDiscountPeriod = 3;
  const firstDiscount = 20;
  const secondDiscountPeriod = 7;
  const secondDiscount = 50;
  const dayCost = 40;

  const totalAmount = dayCost * days;

  if (days >= secondDiscountPeriod) {
    return totalAmount - secondDiscount;
  }

  if (days >= firstDiscountPeriod) {
    return totalAmount - firstDiscount;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
