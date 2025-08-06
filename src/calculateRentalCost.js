/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const shortTerms = 3;
  const shortTermsDiscount = 20;
  const longTerm = 7;
  const longTermDiscount = 50;

  let rentPrice = price * days;

  if (days >= shortTerms && days < longTerm) {
    return (rentPrice -= shortTermsDiscount);
  }

  if (days >= longTerm) {
    return (rentPrice -= longTermDiscount);
  }

  return rentPrice;
}

module.exports = calculateRentalCost;
