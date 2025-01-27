/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayCost = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;

  if (days >= 7) {
    return dayCost * days - bigDiscount;
  }

  if (days >= 3) {
    return dayCost * days - smallDiscount;
  }

  if (days <= 2) {
    return dayCost * days;
  }
}

module.exports = calculateRentalCost;
