/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_COST = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const MID_TERM = 3;
  const MID_TERM_DISCOUNT = 20;

  let totalRentalCost = 0;

  if (days >= LONG_TERM) {
    totalRentalCost = days * RENT_COST - LONG_TERM_DISCOUNT;

    return totalRentalCost;
  }

  if (days >= MID_TERM) {
    totalRentalCost = days * RENT_COST - MID_TERM_DISCOUNT;

    return totalRentalCost;
  }

  totalRentalCost = days * RENT_COST;

  return totalRentalCost;
}

module.exports = calculateRentalCost;
