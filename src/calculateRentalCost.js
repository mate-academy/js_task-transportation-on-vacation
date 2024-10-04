/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const carCostPerDay = 40;
  const longTermDiskont = 50;
  const shortTermDiskont = 20;
  const longTerm = 7;
  const shortTerm = 3;

  if (days >= longTerm) {
    return carCostPerDay * days - longTermDiskont;
  } else if (days >= shortTerm) {
    return carCostPerDay * days - shortTermDiskont;
  }

  return carCostPerDay * days;
}

module.exports = calculateRentalCost;
