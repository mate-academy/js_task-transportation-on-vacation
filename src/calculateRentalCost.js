/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dayTariff = 40;
  const discount20 = 20;
  const discount50 = 50;
  const totalTariff = days * dayTariff;

  if (days >= 7) {
    return totalTariff - discount50;
  }

  if (days >= 3) {
    return totalTariff - discount20;
  }

  return totalTariff;
}

module.exports = calculateRentalCost;
