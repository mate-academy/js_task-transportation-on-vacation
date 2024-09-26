/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const calculate = days * 40;

  if (days >= 7) {
    return calculate - 50;
  } else if (days >= 3) {
    return calculate - 20;
  } else {
    return calculate;
  }
}

module.exports = calculateRentalCost;
