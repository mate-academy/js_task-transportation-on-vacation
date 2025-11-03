/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const oneDayRent = 40;
  const sevenDaysDiscount = 50;
  const threeDaysDiscount = 20;
  const LONG_TERM_RENTAL_DAYS = 7;
  const SHORT_TERM_RENTAL_DAYS = 3;

  if (days >= LONG_TERM_RENTAL_DAYS) {
    return days * oneDayRent - sevenDaysDiscount;
  }

  if (days >= SHORT_TERM_RENTAL_DAYS) {
    return days * oneDayRent - threeDaysDiscount;
  }

  return days * oneDayRent;
}

module.exports = calculateRentalCost;
