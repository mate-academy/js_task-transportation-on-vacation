/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayPrice = 40;
  const total = days * dayPrice;
  const firstDiscountPeriod = 3;
  const firstDiscountAmount = 20;
  const secondDiscountPeriod = 7;
  const secondDiscountAmount = 50;

  return days < firstDiscountPeriod ? total
    : days < secondDiscountPeriod ? total - firstDiscountAmount
      : total - secondDiscountAmount;
}

module.exports = calculateRentalCost;
