/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPrice = 40;
  const lowDiscount = 20;
  const bigDiscount = 50;

  if (days < 3) {
    return days * rentPrice;
  } else if (days < 7) {
    return days * rentPrice - lowDiscount;
  } else {
    return days * rentPrice - bigDiscount;
  }
}

module.exports = calculateRentalCost;
