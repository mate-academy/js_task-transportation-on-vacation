/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const defaultCashback = 20;
  const vipCashback = 50;

  if (days >= 7) {
    return days * price - vipCashback;
  }

  if (days >= 3) {
    return days * price - defaultCashback;
  }

  return days * price;
}

module.exports = calculateRentalCost;
