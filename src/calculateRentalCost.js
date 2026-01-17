/**
 * @param {number} days
 *
 * @return {number}
 */

const dayCost = 40;

function calculateRentalCost(days) {
  const fullConst = days * dayCost;

  if (days >= 7) {
    return fullConst - 50;
  }

  if (days >= 3) {
    return fullConst - 20;
  } else {
    return fullConst;
  }
}

module.exports = calculateRentalCost;
