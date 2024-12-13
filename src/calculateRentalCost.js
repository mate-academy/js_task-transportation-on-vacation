/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const discount7Days = 50;
  const discount3Days = 20;
  const longTermDays = 7;
  const midTermDays = 3;
  const basePrice = days * dailyRate;

  if (days >= longTermDays) {
    return basePrice - discount7Days;
  }

  if (days >= midTermDays) {
    return basePrice - discount3Days;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
