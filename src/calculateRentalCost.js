/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const pricePerDay = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;
  const smallDiscountDays = 3;
  const bigDiscountDays = 7;

  if (days >= bigDiscountDays) {
    return days * pricePerDay - bigDiscount;
  } else if (days >= smallDiscountDays && days < bigDiscountDays) {
    return days * pricePerDay - smallDiscount;
  }

  return days * pricePerDay;
}

module.exports = calculateRentalCost;
