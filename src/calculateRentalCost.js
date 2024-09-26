/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  let totalCost = costPerDay * days;
  const discount7days = 50;
  const discount3days = 20;

  if (days >= 3 && days < 7) {
    totalCost -= discount3days;
  }

  if (days >= 7) {
    totalCost -= discount7days;
  }    

  return totalCost;
}

module.exports = calculateRentalCost;
