/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRent = 40;
  const bigOff = 50;
  const smallOff = 20;

  let cost = days * dailyRent;

  if (days >= 7) {
    cost -= bigOff;
  } else if (days >= 3) {
    cost -= smallOff;
  }

  return cost;
}

module.exports = calculateRentalCost;
