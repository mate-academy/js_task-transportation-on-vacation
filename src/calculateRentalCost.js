/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const dayCost = 40;
  const MEDIUM_TERM_DUSCOUNT = 20;
  const LONG_TERM_DUSCOUNT = 50;
  const basePrice = days * dayCost;

  if (days >= 7) {
    return basePrice - LONG_TERM_DUSCOUNT;
  }

  if (days >= 3) {
    return basePrice - MEDIUM_TERM_DUSCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
