/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const Price = 40;
  const LongTerm = 7;
  const LongTermDiscount = 50;
  const ShortTerm = 3;
  const ShortTermDiscount = 20;

  if (days >= LongTerm) {
    return (days * Price - LongTermDiscount);
  }

  if (days >= ShortTerm) {
    return (days * Price - ShortTermDiscount);
  }

  return (days * Price);
}

module.exports = calculateRentalCost;
