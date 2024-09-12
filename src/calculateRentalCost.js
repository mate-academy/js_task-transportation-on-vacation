/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const longTimeDiscount = 7;
  const shortTimeDiscount = 3;
  const everyDayRent = 40;
  const threeDaysOff = 20;
  const sevenDaysOff = 50;
  const totalCost = everyDayRent * days;

  if (days >= longTimeDiscount) {
    return totalCost - sevenDaysOff;
  }

  if (days >= shortTimeDiscount) {
    return totalCost - threeDaysOff;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
