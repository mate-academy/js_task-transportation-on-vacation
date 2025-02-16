/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRental = 40;
  const discountFromThreeDays = 20;
  const discountFromSevenDays = 50;

  let totalAmount = dailyRental * days;

  if (days >= 7) {
    totalAmount -= discountFromSevenDays;

    return totalAmount;
  }

  if (days >= 3) {
    totalAmount -= discountFromThreeDays;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
