/**
 * @param {number} days
 *
 * @return {number}
 */

const BASE_COST = 40;
const MID_TERM = 3;
const MID_TERMD_DISCOUNT = 20;
const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(days) {
  const costBasis = days * BASE_COST;

  if (days < MID_TERM) {
    return costBasis;
  }

  if (days >= MID_TERM && days < LONG_TERM) {
    return costBasis - MID_TERMD_DISCOUNT;
  }

  return costBasis - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
