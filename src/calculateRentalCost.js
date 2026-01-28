/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const valorDiaria = 40;
  const descontoDay1 = 20;
  const descontoDay2 = 50;

  if (days < 3) {
    return valorDiaria * days;
  } else if (days >= 3 && days <= 6) {
    return valorDiaria * days - descontoDay1;
  } else if (days >= 7) {
    return valorDiaria * days - descontoDay2;
  } else {
    return valorDiaria * days;
  }
}

module.exports = calculateRentalCost;
