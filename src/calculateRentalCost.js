/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const discountForSevenDays = 50;
  const discountForThreeDays = 20;
  const rentWithoutDiscount = days * 40;

  if (days >= 7) {
    return rentWithoutDiscount - discountForSevenDays;
  }

  if (days >= 3) {
    return rentWithoutDiscount - discountForThreeDays;
  }

  return rentWithoutDiscount;
}

module.exports = calculateRentalCost;
