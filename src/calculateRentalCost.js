/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {

  const pricePerDay = 40;
  const longRent = 7;
  const shortRent = 3;
  const longDiscount = 50;
  const shortDiscount = 20;

  const basePrice = days * pricePerDay;

  if(days >= longRent) {
    return basePrice - longDiscount;
  }

  if(days >= shortRent) {
    return basePrice - shortDiscount;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
