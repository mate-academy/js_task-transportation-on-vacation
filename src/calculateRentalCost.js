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
  const rentalCostPerDay = 40;
  const rentalCostPerPeriod = days * rentalCostPerDay;
  const basicDiscount = 20;
  const premiumDiscount = 50;

  if (days === 0) {
    return 0;
  } else if (days < 3) {
    return rentalCostPerPeriod;
  } else if (days > 2 && days < 7) {
    return rentalCostPerPeriod - basicDiscount;
  }

  return rentalCostPerPeriod - premiumDiscount;
}

module.exports = calculateRentalCost;
