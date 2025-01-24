/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const PricePerDay = 40;
  const ShortTime = 3;
  const LongTime = 7;
  const ShortTimeDiscount = 20;
  const LongTimeDiscoumt = 50;

  if (days >= LongTime) {
    return days * PricePerDay - LongTimeDiscoumt;
  }

  if (days >= ShortTime) {
    return days * PricePerDay - ShortTimeDiscount;
  }

  return days * PricePerDay;
}

module.exports = calculateRentalCost;
