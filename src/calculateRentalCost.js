/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let pricePerDay = 40;
  let result = days * pricePerDay;

  if (days >= 7) {
    const discount7Days = 50;
    result -= discount7Days;
  } else if (days >= 3) {
    const discount3Days = 20;
    result -= discount3Days;
  }

  return result;
}

module.exports = calculateRentalCost;
