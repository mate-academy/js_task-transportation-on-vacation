/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const discountSevenDays = 50;
  const discountThreeDays = 20;
  let totalAmount = days * 40;

  if (days >= 7) {
    totalAmount -= discountSevenDays;
  } else if (days >= 3) {
    totalAmount -= discountThreeDays;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
