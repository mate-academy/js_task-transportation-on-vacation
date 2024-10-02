/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const everyDayRent = 40;
  let totalSum = everyDayRent * days;

  if (days >= 7) {
    totalSum = everyDayRent * days - 50;
  } else if (days >= 3) {
    totalSum = everyDayRent * days - 20;
  }

  return totalSum;
}

module.exports = calculateRentalCost;
