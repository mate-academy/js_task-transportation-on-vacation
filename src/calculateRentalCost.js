/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCost = 40;
  const totalCost = days * rentCost;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const minDays = 0;
  const shotTerm = 3;
  const longTerm = 7;

  if (days <= minDays) {
    return 0;
  }

  if (days < shotTerm) {
    return totalCost;
  }

  if (days < longTerm) {
    return totalCost - SHORT_TERM_DISCOUNT;
  }

  if (days >= longTerm) {
    return totalCost - LONG_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
