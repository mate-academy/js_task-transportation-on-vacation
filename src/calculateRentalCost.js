/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceForDay = 40;
  const discountOne = 20;
  const discountTwo = 50;
  const totalCost = days * priceForDay;

  if (days < 3) {
    return totalCost;
  }

  if (days >= 3 && days < 7) {
    return totalCost - discountOne;
  }

  if (days >= 7) {
    return totalCost - discountTwo;
  }
}

module.exports = calculateRentalCost;

// calculateRentalCost(1); // 40
// calculateRentalCost(3); // 100
// calculateRentalCost(7); // 230
