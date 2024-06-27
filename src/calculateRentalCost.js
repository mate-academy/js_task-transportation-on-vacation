/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRentalCost = 40;
  const result = dailyRentalCost * days;

  const daysForBigDiscount = 7;
  const bigDiscount = 50;
  const daysForSmallDiscount = 3;
  const smallDiscount = 20;

  if (days >= daysForBigDiscount) {
    return result - bigDiscount;
  }

  if (days >= daysForSmallDiscount) {
    return result - smallDiscount;
  }

  return result;
}

module.exports = calculateRentalCost;
