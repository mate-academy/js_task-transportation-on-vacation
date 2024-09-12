/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const discount3day = 20;
  const discount7day = 50;
  const totalCoast = days * 40;

  if (days >= 7) {
    return totalCoast - discount7day;
  }

  if (days >= 3) {
    return totalCoast - discount3day;
  }

  return totalCoast;
}

module.exports = calculateRentalCost;
