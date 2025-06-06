/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // valor do dia de aluguel
  const valueRentalDay = 40;
  // valor total a pagar
  const totale = valueRentalDay * days;

  if (days >= 7) {
    return totale - 50;
  } else if (days >= 3) {
    return totale - 20;
  } else {
    return totale;
  }
}

module.exports = calculateRentalCost;
