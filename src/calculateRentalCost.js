/**
 * @param {number} days
 *
 * @return {number}
 */
const dailyRate = 40;
const discount3PlusDays = 20;
const discount7PlusDays = 50;
const minDaysForDiscount3 = 3;
const minDaysForDiscount7 = 7;

function calculateRentalCost(days) {
  const totalCost = days * dailyRate;

  if (days >= minDaysForDiscount7) {
    return totalCost - discount7PlusDays;
  }

  if (days >= minDaysForDiscount3) {
    return totalCost - discount3PlusDays;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
