/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalCost = 40;
  if (days >= 3 && days < 7) {
    return rentalCost * days - 20;
  }
  if (days < 3) {
    return rentalCost * days;
  }
  if (days >= 7) {
    return rentalCost * days - 50;
  }
}

module.exports = calculateRentalCost;
