/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyCost = 40;

  if (days >= 7) {
    return dailyCost * days - 50;
  } else if (days >= 3) {
    return dailyCost * days - 20;
  } else {
    return days * dailyCost;
  }
}

module.exports = calculateRentalCost;
