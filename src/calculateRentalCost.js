/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const feePerDay = 40;
  let totalAmount = 0;

  if (days >= 7) {
    totalAmount = feePerDay * days - 50;
  } else if (days >= 3) {
    totalAmount = feePerDay * days - 20;
  } else {
    totalAmount = feePerDay * days;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
