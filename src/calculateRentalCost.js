/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayCost = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;
  let total = dayCost * days;

  if (days >= 3 && days < 7) {
    total = total - smallDiscount;
  } else if (days >= 7) {
    total = total - bigDiscount;
  }

  return total;
}

module.exports = calculateRentalCost;
