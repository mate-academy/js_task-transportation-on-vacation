/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const lowerDisc = 20;
  const higherDisc = 50;
  const oneDayPrice = 40;
  const priceWhithoutDisc = days * oneDayPrice;

  if (days >= 7) {
    return priceWhithoutDisc - higherDisc;
  }

  if (days >= 3) {
    return priceWhithoutDisc - lowerDisc;
  }

  return priceWhithoutDisc;
}

module.exports = calculateRentalCost;
