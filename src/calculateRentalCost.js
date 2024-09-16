/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const CoastPerDay = 40;
  const ShortTerm = 3;
  const ShortTermDiscount = 20;
  const LongTerm = 7;
  const LongTermDiscount = 50;

  const TotalBaseCoast = days * CoastPerDay;

  if (days >= LongTerm) {
    return TotalBaseCoast - LongTermDiscount;
  }

  if (days >= ShortTerm) {
    return TotalBaseCoast - ShortTermDiscount;
  }

  return TotalBaseCoast;
}

module.exports = calculateRentalCost;
