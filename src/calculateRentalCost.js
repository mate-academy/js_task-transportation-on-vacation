/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalPrice = 40 * days;
  const discount7 = 50;
  const discount3 = 20;

  if (days >= 7) {
    return totalPrice - discount7;
  } else if (days >= 3) {
    return totalPrice - discount3;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
