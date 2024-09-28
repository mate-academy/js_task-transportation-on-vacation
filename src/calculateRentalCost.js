/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const discontFor3Days = 20;
  const discontFor7Days = 50;
  const totalPrice = days * pricePerDay;

  if (days >= 3 && days < 7) {
    return totalPrice - discontFor3Days;
  }

  if (days >= 7) {
    return totalPrice - discontFor7Days;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
