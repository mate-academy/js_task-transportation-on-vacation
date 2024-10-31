/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let totalAmount = 0;

  if (days < 3) {
    totalAmount = days * 40;
  } else if (days >= 3 && days < 7) {
    totalAmount = 40 * days - 20;
  } else if (days >= 7) {
    totalAmount = 40 * days - 50;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
