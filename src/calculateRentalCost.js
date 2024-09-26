/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const withoutCashback = days * 40;
  const bigDiscount = 50;
  const smallDiscount = 20;
  const daysForBigDiscount = 7;
  const daysForSmallDiscount = 3;

  if (days >= daysForBigDiscount) {
    return withoutCashback - bigDiscount;
  }

  if (days >= daysForSmallDiscount) {
    return withoutCashback - smallDiscount;
    ;
  }

  return withoutCashback;
}

module.exports = calculateRentalCost;
