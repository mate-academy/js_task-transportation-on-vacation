/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let totalCout = days * 40;

  if (days >= 3 && days <= 6) {
    totalCout -= 20;
  } else if (days >= 7) {
    totalCout -= 50;
  }

  return totalCout;
}

module.exports = calculateRentalCost;
