/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayPrice = 40;

  if (days > 6) {
    return dayPrice * days - 50;
  } else if (days > 2) {
    return dayPrice * days - 20;
  }

  return dayPrice * days;
}

module.exports = calculateRentalCost;
