/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const carRentCostDay = 40;
  const isLowestDiscount = days >= 3 && days < 7;
  const lowestDiscount = 20;
  const isHighestDiscount = days >= 7;
  const highestDiscount = 50;
  const rentalCost = days * carRentCostDay;

  if (isLowestDiscount) {
    return rentalCost - lowestDiscount;
  }

  if (isHighestDiscount) {
    return rentalCost - highestDiscount;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
