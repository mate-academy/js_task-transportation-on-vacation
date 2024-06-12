/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  var cost = 40 * days;
  let final = cost;

  if (days >= 3 && days < 7) {
    final = cost - 20;
  } else if (days >= 7) {
    final = cost - 50;
  }

  return final;
}

module.exports = calculateRentalCost;
