/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const totalCost = price * days;
  const smallDiscount = 20;
  const bigDiscount = 50;
  const smallTerm = 3;
  const bigTerm = 7;

  if (days >= smallTerm && days < bigTerm) {
    return totalCost - smallDiscount;
  } else if (days >= bigTerm) {
    return totalCost - bigDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
