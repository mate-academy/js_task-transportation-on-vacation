/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const smallDiscount = 20;
  const bigDiscount = 50;
  const rate = 40;
  const daysForBigDiscount = 7;
  const daysForSmallDiscount = 3;
  const price = rate * days;

  if (days >= daysForBigDiscount) {
    return price - bigDiscount;
  }

  if (days >= daysForSmallDiscount) {
    return price - smallDiscount;
  }

  return price;
}

module.exports = calculateRentalCost;
