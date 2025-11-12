/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyPrice = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;
  const smallDiscountTerm = 3;
  const bigDiscountTerm = 7;

  if (days < smallDiscountTerm) {
    return days * dailyPrice;
  }

  if (days < bigDiscountTerm) {
    return days * dailyPrice - smallDiscount;
  }

  return days * dailyPrice - bigDiscount;
}

module.exports = calculateRentalCost;
