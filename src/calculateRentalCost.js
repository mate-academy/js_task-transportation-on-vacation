/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const oneDayCost = 40;
  const bigDiscount = 50;
  const smallDiscount = 20;
  const totalCost = days * oneDayCost;

  if (days >= 7) {
    return totalCost - bigDiscount;
  } else if (days >= 3) {
    return totalCost - smallDiscount;
  } else {
    return totalCost;
  }
}

module.exports = calculateRentalCost;
