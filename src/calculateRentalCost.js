/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const longTerm = 7;
  const discountForLongTerm = 50;
  const shortTerm = 3;
  const discountForShortTerm = 20;
  const priceWithoutDiscount = pricePerDay * days;

  if (days >= longTerm) {
    return priceWithoutDiscount - discountForLongTerm;
  }

  if (days >= shortTerm) {
    return priceWithoutDiscount - discountForShortTerm;
  }

  return priceWithoutDiscount;
}

module.exports = calculateRentalCost;
