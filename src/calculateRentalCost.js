/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalConst = days * 40;

  if (days >= 7) {
    return totalConst - 50;
  } else if (days >= 3) {
    return totalConst - 20;
  } else {
    return totalConst;
  }
}

module.exports = calculateRentalCost;
