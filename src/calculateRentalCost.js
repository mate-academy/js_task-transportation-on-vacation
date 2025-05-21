/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  let total = days * dailyRate;

  if (days >= 7) {
    total -= 50; // Desconto maior para 7 ou mais dias
  } else if (days >= 3) {
    total -= 20; // Desconto para 3 ou mais dias
  }

  return total;
}

module.exports = calculateRentalCost;
