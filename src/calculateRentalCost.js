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
 * you get $20 off your total.
 *
 * Implement calculateRentalCost function
 * which returns the total amount for different count of days.
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
  const rentDayCost = 40;
  const daysMin = 3;
  const daysMax = 7;
  const discountMinDay = 20;
  const discountMaxDay = 50;
  const rentalPrice = days * rentDayCost;

  if (days >= daysMax) {
    return (rentalPrice - discountMaxDay);
  } else if (days >= daysMin) {
    return (rentalPrice - discountMinDay);
  } else {
    return rentalPrice;
  }
}

module.exports = calculateRentalCost;
