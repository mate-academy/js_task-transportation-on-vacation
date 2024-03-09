/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceRental = 40;
  const saleLongPtriod = 50;
  const saleShortPtriod = 20;
  const sumRentalStandart = days * priceRental;

  if (days >= 7) {
    return sumRentalStandart - saleLongPtriod;
  }

  if (days >= 3) {
    return sumRentalStandart - saleShortPtriod;
  }

  return sumRentalStandart;
}

module.exports = calculateRentalCost;
