/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayCost = 40;
  const weekOff = 50;
  const threeDaysOff = 20;
  let total;

  total = days * dayCost;

  if (days >= 3 && days <= 6) {
    total -= threeDaysOff;
  }

  if (days >= 7) {
    total -= weekOff;
  }

  return total;
}

module.exports = calculateRentalCost;
