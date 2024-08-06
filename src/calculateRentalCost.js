/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const price = 40;

  if (days >= 7) {
    return days * price - 50;
  }

  if (days >= 3) {
    return days * price - 20;
  } else {
    return days * price;
  }
}

module.exports = calculateRentalCost;
