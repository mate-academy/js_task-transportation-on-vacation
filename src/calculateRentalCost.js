/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const valorAluguel = 40;

  if (days <= 2) {
    return valorAluguel * days;
  } else if (days >= 3 && days <= 6) {
    return valorAluguel * days - 20;
  } else {
    return valorAluguel * days - 50;
  }
}

module.exports = calculateRentalCost;
