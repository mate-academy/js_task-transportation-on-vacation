/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const carCost = 40;
  if (days < 3) {
    return carCost * days;
  } else if (days < 7) {
    return carCost * days - 20;
  }
  return carCost * days - 50;
}

module.exports = calculateRentalCost;
