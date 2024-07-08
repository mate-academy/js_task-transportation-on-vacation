/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const moneyPerDay = 40;

  const minDiscount = 20;
  const maxDiscount = 50;

  const minDaysForDiscount = 3;
  const maxDaysForDiscount = 7;

  const sum = days * moneyPerDay;

  if (days >= minDaysForDiscount && days < maxDaysForDiscount) {
    return sum - minDiscount;
  }

  if (days >= maxDaysForDiscount) {
    return sum - maxDiscount;
  }

  return sum;
}

module.exports = calculateRentalCost;
