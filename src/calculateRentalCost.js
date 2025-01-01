/**
 * @param {number} days
 *
 * @return {number}
 */

/* Every day you rent the car costs $40.
  If you rent the car for 7 or more days, you get $50 off your total.
   Alternatively, if you rent the car for 3 or more days,
   you get $20 off your total.
Implement calculateRentalCost function that returns 
the total amount for different number of days.
*/

function calculateRentalCost(days) {
  const COSTS = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const BASE_PRICE = COSTS * days;

  if (days >= LONG_TERM) {
    return BASE_PRICE - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return BASE_PRICE - SHORT_TERM_DISCOUNT;
  }

  return BASE_PRICE;
}

module.exports = calculateRentalCost;
