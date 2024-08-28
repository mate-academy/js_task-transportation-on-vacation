/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const Price = 40;
  const PriceForWeek = 50;
  const PriceForThreeDays = 20;

  if (days >= 7) {
    return days * Price - PriceForWeek;
  }

  if (days >= 3) {
    return days * Price - PriceForThreeDays;
  }

  return days * Price;
}

module.exports = calculateRentalCost;
