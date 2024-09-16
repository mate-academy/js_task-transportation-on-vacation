/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let rentalCost = 40 * days;
  const smallDiscount = 20;
  const bigDiscount = 50;

  if (days >= 3 && days < 7) {
    rentalCost -= smallDiscount;
  } else if (days >= 7) {
    rentalCost -= bigDiscount;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
