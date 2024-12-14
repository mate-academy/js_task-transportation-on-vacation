/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayCost = 40;

  if (days >= 7) {
    return dayCost * days - 50;
  } else if (days >= 3) {
    return dayCost * days - 20;
  } else {
    return dayCost * days;
  }
}

module.exports = calculateRentalCost;
