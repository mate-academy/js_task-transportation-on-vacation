/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  let cost = days * pricePerDay;

  if (days >= 7) {
    cost = cost - 50;
  } else if (days >= 3 && days <= 6) {
    cost = cost - 20;
  }

  return cost;
}

module.exports = calculateRentalCost;
