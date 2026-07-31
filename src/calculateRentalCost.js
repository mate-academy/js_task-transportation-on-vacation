/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dayCost = 40;
  const bigDisc = 50;
  const smallDisc = 20;
  const total = days * dayCost;

  if (days >= 7) {
    return total - bigDisc;
  } else if (days >= 3) {
    return total - smallDisc;
  } else {
    return total;
  }
}

module.exports = calculateRentalCost;
