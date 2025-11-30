/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rent = 40;
  const MEDIUM_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  if (days < 3) {
    return rent * days;
  }

  if (days <= 6) {
    return days * rent - MEDIUM_TERM_DISCOUNT;
  }

  if (days >= 7) {
    return days * rent - LONG_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
