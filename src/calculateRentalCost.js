/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRentalPrice = 40;
  const discountForSevenDays = 50;
  const discountForThreeDays = 20;
  const DAYS_FOR_SMALL_DISCOUNT = 3;
  const DAYS_FOR_LARGE_DISCOUNT = 7;
  const rentalDays = days;
  let totalCost = dailyRentalPrice * rentalDays;

  return rentalDays >= DAYS_FOR_LARGE_DISCOUNT
    ? (totalCost -= discountForSevenDays)
    : rentalDays >= DAYS_FOR_SMALL_DISCOUNT
      ? (totalCost -= discountForThreeDays)
      : totalCost;
}

module.exports = calculateRentalCost;
