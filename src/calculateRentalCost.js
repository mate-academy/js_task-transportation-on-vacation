/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const longTerm = 7;
  const shortTerm = 3;
  const bigDiscount = 50;
  const smallDiscount = 20;
  const pricePerDay = 40;

  if (days >= longTerm) {
    return pricePerDay * days - bigDiscount;
  }

  if (days >= shortTerm) {
    return pricePerDay * days - smallDiscount;
  }

  return pricePerDay * days;
}

module.exports = calculateRentalCost;
