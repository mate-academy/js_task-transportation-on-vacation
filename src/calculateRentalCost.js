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
 * If you rent the car for 7 or more days, you get $50 off your totalCost.
 * Alternatively, if you rent the car for 3 or more days,
 * you get $20 off your totalCost.
 *
 * Implement calculateRentalCost function
 * which returns the totalCost amount for different count of days.
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
  // write code here
  let totalCost = 0;
  const rentPrice = 40;
  const bigDiscount = 50;
  const smallDiscount = 20;
  const bigDiskountDays = 7;
  const smallDiscountDays = 3;

  if (days < smallDiscountDays) {
    totalCost = days * rentPrice;
  } else if (days >= smallDiscountDays && days < bigDiskountDays) {
    totalCost = days * rentPrice - smallDiscount;
  } else {
    totalCost = days * rentPrice - bigDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
