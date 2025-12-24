/**
 * @param {number} days
 *
 * @return {number}
 *
 **/
function calculateRentalCost(days) {
  const midTerm = 3;
  const longTerm = 7;
  const rentCost = 40;
  const midDiscount = 20;
  const longDiscount = 50;

  if (days >= longTerm) {
    return days * rentCost - longDiscount;
  }

  if (days >= midTerm) {
    return days * rentCost - midDiscount;
  }

  return days * rentCost;
}

module.exports = calculateRentalCost;
