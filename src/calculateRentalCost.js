/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const baseCost = 40;
  const discountFor3Days = 20;
  const discountFor7Days = 50;
  const mediumTerm = 3;
  const longTerm = 7;

  if (days >= longTerm) {
    return baseCost * days - discountFor7Days;
  } else if (days >= mediumTerm) {
    return baseCost * days - discountFor3Days;
  }

  return baseCost * days;
}

module.exports = calculateRentalCost;
