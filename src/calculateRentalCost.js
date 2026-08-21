/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // O custo base é de $40 por dia
  let totalCost = days * 40;

  // Verifica qual desconto aplicar baseado na quantidade de dias
  if (days >= 7) {
    totalCost -= 50; // $50 de desconto para 7 dias ou mais
  } else if (days >= 3) {
    totalCost -= 20; // $20 de desconto para 3 dias ou mais
  }

  return totalCost;
}

module.exports = calculateRentalCost;
