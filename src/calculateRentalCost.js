/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const oneDayCost = 40;
  const bigDiscount = 50;
  const smallDiscount = 20;
  const longTerm = 7;
  const shortTerm = 3;

  const totalCost = days * oneDayCost;

  if (days >= longTerm) {
    return totalCost - bigDiscount;
  } else if (days >= shortTerm) {
    return totalCost - smallDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
