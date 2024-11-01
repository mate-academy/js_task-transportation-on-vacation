/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalPerDay = 40;
  const rentalPrice = rentalPerDay * days;

  if (days >= 7) {
    return rentalPrice - 50;
  } else if (days >= 3) {
    return rentalPrice - 20;
  } else {
    return rentalPrice;
  }
}

module.exports = calculateRentalCost;
