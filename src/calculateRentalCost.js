/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const oneDayRentPrice = 40;
  const smallOff = 20;
  const bigOff = 50;

  let result = null;

  if (days >= 7) {
    result = days * oneDayRentPrice - bigOff;
  } else if (days >= 3) {
    result = days * oneDayRentPrice - smallOff;
  } else {
    result = days * oneDayRentPrice;
  }

  return result;
}

module.exports = calculateRentalCost;
