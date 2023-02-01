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
 * you get $20 off your t
 * otal.
 *
 * Implement calculateRentalCost function
 * which returns the total amount for different count of days.
 *
 * Examples:
 *  - calculateRentalCost(1) === 40
 *  - calculateRentalCost(3) === 100
 *  - calculateRentalCost(7) === 230
 *
 * @param {number} payTotal
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const payOneDay = 40;
  const discountMore3Days = 20;
  const discountMore7Days = 50;
  const bigDiscountThreshold = 7;
  const smallDiscountThreshold = 3;

  const payTotal = days * payOneDay;
  const rentSmallDiscount = payTotal - discountMore3Days;
  const rentBigDiscount = payTotal - discountMore7Days;

  if (days >= bigDiscountThreshold) {
    return rentBigDiscount;
  }

  if (days >= smallDiscountThreshold) {
    return rentSmallDiscount;
  }

  return payTotal;
}

module.exports = calculateRentalCost;
