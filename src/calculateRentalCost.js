/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let totalCost = 0;
  const carCost = 40;
  let offCost = 0;

  if (days >= 7) {
    offCost = 50;
  } else if (days >= 3) {
    offCost = 20;
  } else if (days < 3) {
    offCost = 0;
  }

  totalCost = carCost * days - offCost;

  return totalCost;
}

module.exports = calculateRentalCost;
