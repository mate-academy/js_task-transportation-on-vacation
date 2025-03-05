/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayCost = 40;
  let totalCost = dayCost * days;

  if (days >= 7) {
    totalCost -= 50;
  } else if (days >= 3) {
    totalCost -= 20;
  }

  return totalCost > 0 ? totalCost : 0; // Garante que o valor não seja negativo
}

module.exports = calculateRentalCost;
