/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_CAR_COST = 40;
  const LONG_DISKOUNT = 7;
  const SHORT_DISKOUNT = 3;
  const VALUE_LONG_DISKOUNT = 50;
  const VALUE_SHORT_DISKOUNT = 20;
  const TOTAL_COST = days * RENT_CAR_COST;

  if (days >= LONG_DISKOUNT) {
    return TOTAL_COST - VALUE_LONG_DISKOUNT;
  }

  if (days >= SHORT_DISKOUNT) {
    return TOTAL_COST - VALUE_SHORT_DISKOUNT;
  }

  return TOTAL_COST;
}

module.exports = calculateRentalCost;
