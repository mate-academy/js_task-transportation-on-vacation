/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const longTerm = 7;
  const smallTerm = 3;
  const longDiscount = 50;
  const smallDiscount = 20;

  if (days >= longTerm) {
    return (price * days) - longDiscount;
  }

  if (days >= smallTerm) {
    return (price * days) - smallDiscount;
  }

  return price * days;
}

module.exports = calculateRentalCost;
