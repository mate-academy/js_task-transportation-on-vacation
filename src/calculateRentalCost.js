/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const RENT_CAR_C0ST = 40;

  const LONG_TERM = 7;
  const LONG_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_DISCOUNT = 20;

  let allResult = 0;

  if (days >= LONG_TERM) {
    allResult += RENT_CAR_C0ST * days - LONG_DISCOUNT;

    return allResult;
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    allResult += RENT_CAR_C0ST * days - SHORT_DISCOUNT;

    return allResult;
  }

  return (allResult += RENT_CAR_C0ST * days);
}

module.exports = calculateRentalCost;
