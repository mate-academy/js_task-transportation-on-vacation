/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  if (days <= 0) {
    return 0;
  }

  const basicPricePerDay = 40;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;

  if (days < 3) {
    return basicPricePerDay * days;
  }

  if (days < 7) {
    return basicPricePerDay * days - shortTermDiscount;
  }

  return basicPricePerDay * days - longTermDiscount;
}

module.exports = calculateRentalCost;
