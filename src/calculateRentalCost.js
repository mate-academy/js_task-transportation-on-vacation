/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const discountFor7Days = 50;
  const discountFor3Days = 20;
  const longTermRentThreshold = 7;
  const shortTermRentThreshold = 3;
  let result = days * dailyRate;

  if (days >= longTermRentThreshold) {
    result = result - discountFor7Days;

    return result;
  }

  if (days >= shortTermRentThreshold) {
    result = result - discountFor3Days;

    return result;
  }
  return result;
}

module.exports = calculateRentalCost;
