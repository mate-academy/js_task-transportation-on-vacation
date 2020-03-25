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
  const rentCost = 40;
  const minDiscount = 20;
  const maxDiscount = 50;
  const rentDays3 = 3;
  const rentDays7 = 7;

  if (days >= rentDays7) {
    return days * rentCost - maxDiscount;
  } else {
    if (days >= rentDays3) {
      return days * rentCost - minDiscount;
    } else {
      return days * rentCost - 0;
    }
  }
}

module.exports = calculateRentalCost;
