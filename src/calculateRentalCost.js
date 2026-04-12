/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceForOneDay = 40;
  const shortTerm = 3;
  const shortTermDiscount = 20;
  const longTerm = 7;
  const longTermDiscount = 50;

  if (days >= longTerm) {
    return priceForOneDay * days - longTermDiscount;
  }

  if (days >= shortTerm) {
    return priceForOneDay * days - shortTermDiscount;
  }

  return priceForOneDay * days;
}

module.exports = calculateRentalCost;
