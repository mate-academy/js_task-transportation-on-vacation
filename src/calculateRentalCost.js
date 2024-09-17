/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const smallDiscount = 20;
  const bigDiscount = 50;
  const price = 40;
  const total = price * days;
  const daysForSmallDiscount = 3;
  const daysForBigDiscount = 7;

  if (days >= daysForSmallDiscount && days < daysForBigDiscount) {
    return total - smallDiscount;
  }

  if (days >= daysForBigDiscount) {
    return total - bigDiscount;
  }

  return total;
}

module.exports = calculateRentalCost;
