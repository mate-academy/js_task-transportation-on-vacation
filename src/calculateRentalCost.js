/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let result = 40 * days;
  const daysForFirstDiscount = 3;
  const firstDiscount = 20;
  const daysForSecondDiscount = 7;
  const secondDiscount = 50;

  if (days >= daysForSecondDiscount) {
    result -= secondDiscount;

    return result;
  }

  if (days >= daysForFirstDiscount) {
    result -= firstDiscount;
  }

  return result;
}

module.exports = calculateRentalCost;
