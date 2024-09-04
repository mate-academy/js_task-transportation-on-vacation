/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rent = 40;
  const minDiscount = 20;
  const maxDiscount = 50;
  const minTerm = 3;
  const longTerm = 7;

  if (days >= longTerm) {
    return rent * days - maxDiscount;
  }

  if (days >= minTerm) {
    return rent * days - minDiscount;
  }

  return rent * days;
}

module.exports = calculateRentalCost;
