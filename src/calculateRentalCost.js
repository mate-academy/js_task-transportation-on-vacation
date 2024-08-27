/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let totalToPay = 0;
  const DAY_RENT = 40;

  for (let day = 1; day <= days; day++) {
    totalToPay += DAY_RENT;
  }

  if (days > 6) {
    totalToPay -= 50;
  } else if (days > 2) {
    totalToPay -= 20;
  }

  return totalToPay;
}

module.exports = calculateRentalCost;
