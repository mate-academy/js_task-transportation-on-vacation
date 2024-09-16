/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRent = 40;
  const discount3 = 20;
  const week = 50;
  const cost = days * dayRent;

  if (days >= 3 && days < 7) {
    return cost - discount3;
  } else if (days >= 7) {
    return cost - week;
  }
  return cost;
}

module.exports = calculateRentalCost;
