/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const everyDayRent = 40;
  const lowCashback = 20;
  const highCashback = 50;
  let totalAmount = 0;

  if (days < 3) {
    totalAmount = days * everyDayRent;
  } else if (days > 2 && days < 7) {
    totalAmount = days * everyDayRent - lowCashback;
  } else if (days > 6) {
    totalAmount = days * everyDayRent - highCashback;
  }

  return totalAmount;
};

module.exports = calculateRentalCost;
