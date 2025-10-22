/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCarCost = 40;
  const carRentalDiscount = 20;
  const carRentalDiscountBig = 50;
  const MEDIUM_TERM_DAYS = 3;
  const LONG_TERM_DAYS = 7;

  if (days < MEDIUM_TERM_DAYS) {
    return days * rentCarCost;
  }

  if (days >= MEDIUM_TERM_DAYS && days < LONG_TERM_DAYS) {
    return days * rentCarCost - carRentalDiscount;
  }

  if (days >= LONG_TERM_DAYS) {
    return days * rentCarCost - carRentalDiscountBig;
  }
}
module.exports = calculateRentalCost;
