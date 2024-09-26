/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const bigDiscountPeriod = 7;
  const smallDiscountPeriod = 3;
  const dayRentalPrice = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;

  if (days < smallDiscountPeriod) {
    return days * dayRentalPrice;
  }

  if (days < bigDiscountPeriod) {
    return days * dayRentalPrice - smallDiscount;
  } else {
    return days * dayRentalPrice - bigDiscount;
  }
}

module.exports = calculateRentalCost;
