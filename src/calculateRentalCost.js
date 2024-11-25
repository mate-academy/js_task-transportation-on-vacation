/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyPay = 40;

  if (days <= 2) {
    return days * dailyPay;
  }

  let cost = dailyPay * days;

  if (days >= 3 && days <= 6) {
    cost = cost - 20;
  }

  if (days >= 7) {
    cost = cost - 50;
  }

  return cost;
}

module.exports = calculateRentalCost;
