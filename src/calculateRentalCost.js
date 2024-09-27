/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const longTermDiscount = 50;
  const shortTermDiscount = 20;
  const pricePerDay = 40;
  const LongTerm = 7;
  const ShortTerm = 3;
  const basePrice = days * pricePerDay;

  if (days >= LongTerm) {
    return basePrice - longTermDiscount;
  }

  if (days >= ShortTerm) {
    return basePrice - shortTermDiscount;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
