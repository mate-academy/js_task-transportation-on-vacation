/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalCost = 40;
  const shortDiscount = 20;
  const longDiscount = 50;

  if (days < 3) {
    return rentalCost * days;
  } else if (days >= 3 && days < 7) {
    return (rentalCost * days) - shortDiscount;
  } else if (days >= 7) {
    return (rentalCost * days) - longDiscount;
  }
}

module.exports = calculateRentalCost;
