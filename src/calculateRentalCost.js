/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const longTerm = 7;
  const midTerm = 3;
  const longDiscount = 50;
  const midDiscount = 20;
  const rentPerDay = 40;

  const price = rentPerDay * days;

  if (days >= longTerm) {
    return price - longDiscount;
  }

  if (days >= midTerm) {
    return price - midDiscount;
  }

  return price;
}

module.exports = calculateRentalCost;
