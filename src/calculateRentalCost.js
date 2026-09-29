/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = 40;
  const longTerm = 7;
  const shortTerm = 3;
  const longDiscount = 50;
  const shortDiscount = 20;

  let rental = basePrice * days;

  if (days >= longTerm) {
    rental -= longDiscount;
  } else if (days >= shortTerm) {
    rental -= shortDiscount;
  }

  return rental;
}

module.exports = calculateRentalCost;
