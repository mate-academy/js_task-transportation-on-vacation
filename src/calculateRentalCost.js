/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalCost = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;

  let result = days * rentalCost;

  if (days >= 3 && days < 7) {
    result -= smallDiscount;
  }

  if (days >= 7) {
    result -= bigDiscount;
  }

  return result;
}

module.exports = calculateRentalCost;
