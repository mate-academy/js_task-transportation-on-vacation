/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const shortTerm = 3;
  const midTerm = 7;
  const basePrice = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;

  if (days < shortTerm) {
    return basePrice * days;
  }

  if (days >= shortTerm && days < midTerm) {
    return basePrice * days - smallDiscount;
  }

  if (days >= midTerm) {
    return basePrice * days - bigDiscount;
  }
}

module.exports = calculateRentalCost;
