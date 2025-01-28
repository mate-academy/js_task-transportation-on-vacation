/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const maiorTempo = 7;
  const valorMaiorDesconto = 50;
  const menorTempo = 3;
  const valorMenorDesconto = 20;
  const price = days * pricePerDay;

  if (days >= maiorTempo) {
    return price - valorMaiorDesconto;
  }

  if (days >= menorTempo) {
    return price - valorMenorDesconto;
  } else {
    return price;
  }
}
module.exports = calculateRentalCost;
