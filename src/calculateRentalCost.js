/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let carCost = 0;
  const costForDays = days * 40;

  if (days >= 1 && days <= 2) {
    carCost = costForDays;
  } else if (days >= 3 && days <= 6) {
    carCost = costForDays - 20;
  } else if (days >= 7) {
    carCost = costForDays - 50;
  }

  return carCost;
}

module.exports = calculateRentalCost;
