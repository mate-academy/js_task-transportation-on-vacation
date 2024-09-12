/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basicDiscount = 20;
  const advancedDiscount = 50;
  const carRent = 40;
  const amount = days * carRent;

  if (days >= 7) {
    return amount - advancedDiscount;
  }

  if (days >= 3) {
    return amount - basicDiscount;
  }

  return amount;
}

module.exports = calculateRentalCost;
