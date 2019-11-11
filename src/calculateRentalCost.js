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
  const cost = 40;
  let costForAll = cost * days;
  const diffThree = 20;
  const diffSeven = 50;
  if (days <= 0) {
    return "Can't calculate the rent";
  } else if (days >= 3 && days < 7) {
    costForAll -= diffThree;
  } else if (days >= 7) {
    costForAll -= diffSeven;
  }

  return costForAll;
}

module.exports = calculateRentalCost;
