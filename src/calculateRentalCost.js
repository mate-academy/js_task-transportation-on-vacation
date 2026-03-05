/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const rentalCost = days * pricePerDay;
  const shortPeriod = 3;
  const mediumPeriod = 6;
  const longPeriod = 7;
  const basicDiscount = 20;
  const longPeriodDiscount = 50;

  if (days >= shortPeriod && days <= mediumPeriod) {
    return rentalCost - basicDiscount;
  }

  if (days >= longPeriod) {
    return rentalCost - longPeriodDiscount;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
