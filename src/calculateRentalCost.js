/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let carCost = 0;
  const costForDays = days * 40;
  const longTerm = 7;
  const longTermDiscount = 50;
  const mediumTerm = 3;
  const mediumTermDiscount = 20;

  if (days >= 1 && days <= 2) {
    carCost = costForDays;
  } else if (days >= mediumTerm && days <= 6) {
    carCost = costForDays - mediumTermDiscount;
  } else if (days >= longTerm) {
    carCost = costForDays - longTermDiscount;
  }

  return carCost;
}

module.exports = calculateRentalCost;
