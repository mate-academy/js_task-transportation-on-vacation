/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BasePrice = 40;
  const LongTerm = 7;
  const ShortTermDiscount = 20;
  const LongTermDiscount = 50;

  if (days >= 3 && days <= 6) {
    return BasePrice * days - ShortTermDiscount;
  }

  if (days >= LongTerm) {
    return BasePrice * days - LongTermDiscount;
  }

  return BasePrice * days;
}

module.exports = calculateRentalCost;
