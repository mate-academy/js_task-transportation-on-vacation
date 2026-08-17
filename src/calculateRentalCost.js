/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const longTerm = 7;
  const shortTerm = 3;
  const rentalPriceDaily = 40;
  const litleDiscount = 20;
  const largeDiscount = 50;

  if (days >= longTerm) {
    return days * rentalPriceDaily - largeDiscount;
  }

  if (days >= shortTerm) {
    return days * rentalPriceDaily - litleDiscount;
  }

  return days * rentalPriceDaily;
}

module.exports = calculateRentalCost;
