/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let res = days * 40;

  if (days >= 7) {
    res -= 50;
  } else if (days >= 3) {
    res -= 20;
  }

  return res;
}

module.exports = calculateRentalCost;
