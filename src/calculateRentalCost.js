/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentDay = 40;
  const discountDay3 = 20;
  const discountDay7 = 50;

  const totalCost = days * rentDay;

  if (days >= 7) {
    return totalCost - discountDay7;
  }

  if (days >= 3) {
    return totalCost - discountDay3;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
