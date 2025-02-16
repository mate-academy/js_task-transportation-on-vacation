/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const regularCost = 40;
  const discountThreeDays = 20;
  const discountSevenDays = 50;
  const firstDiscountPeriod = 3;
  const secondDiscountPeriod = 7;
  const totalWithoutDiscount = days * regularCost;

  if (days > 0 && days < firstDiscountPeriod) {
    return totalWithoutDiscount;
  }

  if (days >= firstDiscountPeriod && days < secondDiscountPeriod) {
    return totalWithoutDiscount - discountThreeDays;
  }

  if (days >= secondDiscountPeriod) {
    return totalWithoutDiscount - discountSevenDays;
  }
}

module.exports = calculateRentalCost;
