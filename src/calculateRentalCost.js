/**
 * @param {number} days
 *
 * @return {number}
 */
const PRICE_PER_DAY = 40;
const LONG_TRIP = 7;
const SHORT_TRIP = 3;
const LONG_TRIP_DISCOUNT = 50;
const SHORT_TRIP_DISCOUNT = 20;

function calculateRentalCost(days) {
  const cost = days * PRICE_PER_DAY;

  if (days >= LONG_TRIP) {
    return cost - LONG_TRIP_DISCOUNT;
  }

  if (days >= SHORT_TRIP && days < LONG_TRIP) {
    return cost - SHORT_TRIP_DISCOUNT;
  }

  return cost;
}

module.exports = calculateRentalCost;
