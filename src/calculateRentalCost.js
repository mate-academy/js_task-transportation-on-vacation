/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const ONEDAY_TRIP = 40;
  const LONG_TRIP = 7;
  const LONG_TRIP_DISCOUNT = 50;
  const SHORT_TRIP = 3;
  const SHORT_TRIP_DISCOUNT = 20;

  if (days >= LONG_TRIP) {
    return ONEDAY_TRIP * days - LONG_TRIP_DISCOUNT;
  }

  if (days >= SHORT_TRIP && days < LONG_TRIP) {
    return ONEDAY_TRIP * days - SHORT_TRIP_DISCOUNT;
  }

  return ONEDAY_TRIP * days;
}
module.exports = calculateRentalCost;
