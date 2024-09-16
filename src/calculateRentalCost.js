/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const oneDayPrice = 40;
  const smallCashback = 20;
  const bigCashback = 50;
  const totalPrice = days * oneDayPrice;

  if (days >= 3 && days < 7) {
    return totalPrice - smallCashback;
  }

  if (days >= 7) {
    return totalPrice - bigCashback;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
