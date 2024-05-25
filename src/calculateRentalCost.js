/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyCost = 40;
  const manyDays = 7;
  const fewDays = 3;

  if (days >= manyDays) {
    return dailyCost * days - 50;
  }

  if (days >= fewDays) {
    return dailyCost * days - 20;
  }

  return days * dailyCost;
}

module.exports = calculateRentalCost;
