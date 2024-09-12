/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = days * 40;
  const discountForSeven = 50;
  const discountForThree = 20;

  if (days >= 7) { // discount is $50 for 7 or more days
    return cost - discountForSeven;
  } else if (days >= 3) { // discount is $20 for 3 or more days
    return cost - discountForThree;
  }

  return cost;
}

module.exports = calculateRentalCost;
