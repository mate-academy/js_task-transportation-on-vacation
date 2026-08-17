/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalPriceDaily = 40;
  const litleDiscount = 20;
  const largeDiscount = 50;

  if (days >= 7) {
    return days * rentalPriceDaily - largeDiscount;
  }

  if (days >= 3) {
    return days * rentalPriceDaily - litleDiscount;
  }

  return days * rentalPriceDaily;
}

module.exports = calculateRentalCost;
