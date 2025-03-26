/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const rentPrice = 40;
  const smallerDiscount = 20;
  const biggerDiscount = 50;

  if ((days >= 3) && (days <= 6)) {
    return days * rentPrice - smallerDiscount;
  } else if (days >= 7) {
    return days * rentPrice - biggerDiscount;
  }

  return days * rentPrice;
}

module.exports = calculateRentalCost;
