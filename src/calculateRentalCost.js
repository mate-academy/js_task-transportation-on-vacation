/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let result = days * 40;

  if (days >= 7) {
    result -= 50; // Discount for 7 or more days
  } else if (days >= 3) {
    result -= 20; // Discount for 3 to 6 days
  }

  return result;
}

module.exports = calculateRentalCost;
