/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyFee = 40;
  let amount = days * dailyFee;

  if (days >= 7) {
    return amount - 50;
  }

  if (days >= 3) {
    return amount - 20;
  }

  return amount;
}

module.exports = calculateRentalCost;
