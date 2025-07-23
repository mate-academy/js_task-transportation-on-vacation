/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const VALOR_ALUGUEL = 40;

  const VALOR_TOTAL = days * VALOR_ALUGUEL;

  if (days >= 7) {
    return VALOR_TOTAL - 50;
  }

  if (days >= 3) {
    return VALOR_TOTAL - 20;
  }

  return VALOR_TOTAL;
}
module.exports = calculateRentalCost;
