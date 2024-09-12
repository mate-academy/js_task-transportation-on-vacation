/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAY_RENT = 40;
  const DISCOUNT_FOR_3_DAYS_RENT = 20;
  const DISCOUNT_FOR_7_DAYS_RENT = 50;
  const rentalPerDay = days * DAY_RENT;
  if (days >= 7) {
    return rentalPerDay - DISCOUNT_FOR_7_DAYS_RENT;
  } else if (days >= 3) {
    return rentalPerDay - DISCOUNT_FOR_3_DAYS_RENT;
  } else {
    return rentalPerDay;
  }
}

module.exports = calculateRentalCost;
