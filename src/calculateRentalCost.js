/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const lowestDay = 3;
  const highestDay = 7;
  const multiplier = 40;
  const discountForFirstSevenDays = 20;
  const discountForMoreThanSevenDays = 50;

  const calculatedCost = days * multiplier;

  if (days >= lowestDay && days < highestDay) {
    return calculatedCost - discountForFirstSevenDays;
  }

  if (days >= highestDay) {
    return calculatedCost - discountForMoreThanSevenDays;
  }

  return calculatedCost;
}

module.exports = calculateRentalCost;
