/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let result = 0;
  const daysForLittleDiscount = 3;
  const littleDiscount = 20;
  const daysForBigDiscount = 7;
  const bigDiscount = 50;
  const dayCost = 40;

  if (days >= daysForLittleDiscount && days < daysForBigDiscount) {
    result -= littleDiscount;
  }

  if (days >= daysForBigDiscount) {
    result -= bigDiscount;
  }

  return days * dayCost + result;
}

module.exports = calculateRentalCost;
