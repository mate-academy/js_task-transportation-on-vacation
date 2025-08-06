/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPrice = 40;
  const firstTerm = 3;
  const firstDiscount = 20;
  const secondTerm = 7;
  const secondDiscount = 50;

  if (days >= secondTerm) {
    return days * rentPrice - secondDiscount;
  } else if (days >= firstTerm) {
    return days * rentPrice - firstDiscount;
  }

  return days * rentPrice;
}

module.exports = calculateRentalCost;
