/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const calculate = price * days;

  const discountOnSeven = 50;
  const discountOnThree = 20;

  if (days >= 7) {
    return calculate - discountOnSeven;
  }

  if (days >= 3) {
    return calculate - discountOnThree;
  }

  return calculate;
}

module.exports = calculateRentalCost;
