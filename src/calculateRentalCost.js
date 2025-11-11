/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const baseCostForDay = 40;
  const sevenDays = 7;
  const discountForThree = 20;
  const discountForSeven = 50;
  const MIN_DAYS_FOR_DISCOUNT = 3;
  const MAX_DAYS_FOR_DISCOUNT = 6;

  const two = 2;

  if (days >= sevenDays) {
    return baseCostForDay * days - discountForSeven;
  }

  if (days >= MIN_DAYS_FOR_DISCOUNT && days <= MAX_DAYS_FOR_DISCOUNT) {
    return baseCostForDay * days - discountForThree;
  }

  if (days <= two) {
    return baseCostForDay * days;
  }
  // write code here
}

module.exports = calculateRentalCost;
