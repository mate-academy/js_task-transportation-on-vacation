/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let cost = 0;

  if (days <= 0) {
    return 0;
  }

  cost = days * 40;

  switch (true) {
    case days < 3:
      return cost;
    case days < 7:
      return cost - 20;
    default:
      return cost - 50;
  }
}

module.exports = calculateRentalCost;
