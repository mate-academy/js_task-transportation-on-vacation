/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const smallDiscount = 20;
  const bigDiscount = 50;
  let rentalCost = days * 40;

  if (days >= 7) {
    rentalCost -= bigDiscount;
  } else if (days >= 3) {
    rentalCost -= smallDiscount;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
