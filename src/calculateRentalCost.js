/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const totalCost = days * pricePerDay;
  let LONG_TERM_DISCOUNT = 50;

  if (days >= 7) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  if (days > 2 && days < 7) {
    LONG_TERM_DISCOUNT = 20;

    return totalCost - LONG_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
