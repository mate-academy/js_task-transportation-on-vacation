/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const valorDiaria = 40;
  const valorTotal = valorDiaria * days;

  if (days >= 7) {
    return valorTotal - 50;
  }

  if (days >= 3 && days < 7) {
    return valorTotal - 20;
  }

  return valorTotal;
}

module.exports = calculateRentalCost;
