/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPerDay = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;

  const shortRentTerm = 3;
  const longRentTerm = 7;

  const total = rentPerDay * days;

  if (days >= shortRentTerm && days < longRentTerm) {
    return total - smallDiscount;
  }

  if (days >= longRentTerm) {
    return total - bigDiscount;
  }

  return total;
}

module.exports = calculateRentalCost;
