/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceOneDay = 40;
  const longTerm = 7;
  const longTermDiscount = 50;
  const shortTerm = 3;
  const shortTermDiscount = 20;

  if (typeof days !== 'number' || days <= 0) {
    return 'Please enter correct data';
  }

  const basePrice = days * priceOneDay;

  if (days >= longTerm) {
    return basePrice - longTermDiscount;
  }

  if (days >= shortTerm) {
    return basePrice - shortTermDiscount;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
