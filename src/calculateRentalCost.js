/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const bigDiscount = 50;
  const smallDiscount = 20;
  const minDaysForBigDiscount = 7;
  const minDaysForSmallDiscount = 3;

  if (days >= minDaysForBigDiscount) {
    return days * price - bigDiscount;
  }

  if (days >= minDaysForSmallDiscount) {
    return days * price - smallDiscount;
  }

  return days * price;
}

module.exports = calculateRentalCost;
