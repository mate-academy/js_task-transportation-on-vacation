'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(numberOfDays) {
  //
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM = 3;
  const MID_TERM_DISCOUNT = 20;
  // Every day you rent the car costs $40.
  const basePrice = numberOfDays * 40;

  // If you rent the car for 7 or more days, you get $50 off your total.
  if (numberOfDays >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  // Alternatively, if you rent the car for 3 or more days,
  // you get $20 off your total.
  if (numberOfDays >= MID_TERM) {
    return basePrice - MID_TERM_DISCOUNT;
  }

  // No discount
  return basePrice;
}

module.exports = calculateRentalCost;
