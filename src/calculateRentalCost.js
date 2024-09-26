/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalCost = 40;
  const discount3days = 20;
  const discount7days = 50;
  const totalPrice = days * rentalCost;

  if (days >= 3 && days < 7) {
    return totalPrice - discount3days;
  } else if (days >= 7) {
    return totalPrice - discount7days;
  }
  return totalPrice;
}

module.exports = calculateRentalCost;
