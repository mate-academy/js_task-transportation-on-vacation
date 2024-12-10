/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalCost = 40;

  if (days >= 7) {
    return rentalCost * days - 50;
  } else if (days >= 3) {
    return rentalCost * days - 20;
  } else {
    return rentalCost * days;
  }
}

module.exports = calculateRentalCost;
