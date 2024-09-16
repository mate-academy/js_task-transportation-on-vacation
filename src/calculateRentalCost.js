/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayCost = 40;
  const total = days * dayCost;
  const discountTwenty = 20;
  const discountFifty = 50;

  if (days < 3) {
    return total;
  }

  if (days < 7) {
    return total - discountTwenty;
  }

  return total - discountFifty;
}

module.exports = calculateRentalCost;
