/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = days * 40;
  const ShortTerm = 3;
  const ShortTermDiscount = 20;
  const LongTerm = 7;
  const LongTermDiscount = 50;

  if (days >= LongTerm) {
    return price - LongTermDiscount;
  }

  if (days >= ShortTerm) {
    return price - ShortTermDiscount;
  }

  return price;
}

module.exports = calculateRentalCost;
