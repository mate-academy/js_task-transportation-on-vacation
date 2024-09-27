/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const rent = 40;
  let totalRentAmount = 0;

  if (days >= 7) {
    totalRentAmount += rent * days - 50;
  } else if (days >= 3) {
    totalRentAmount += rent * days - 20;
  } else if (days < 3) {
    totalRentAmount += rent * days;
  }

  return totalRentAmount;
}

module.exports = calculateRentalCost;
git a