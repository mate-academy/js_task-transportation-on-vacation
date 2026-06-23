/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dayPrice = 40;

  if (days < 3) {
    return dayPrice * days;
  }

  if (days < 7) {
    return dayPrice * days - 20;
  }

  return dayPrice * days - 50;
}

module.exports = calculateRentalCost;
