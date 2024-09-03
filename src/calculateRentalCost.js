/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const rentForDay = 40;

  if (days >= 7) {
    return rentForDay * days - 50;
  }

  if (days >= 3) {
    return rentForDay * days - 20;
  }

  return rentForDay * days;
}

module.exports = calculateRentalCost;
