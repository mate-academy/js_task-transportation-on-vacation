/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(numberOfDays) {
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const dailyRate = 40;

  let discount = 0;
  if (numberOfDays >= 7) {
    discount = LONG_TERM_DISCOUNT;
  } else if (numberOfDays >= 3) {
    discount = SHORT_TERM_DISCOUNT;
  }
  
  return numberOfDays * dailyRate - discount;
}

module.exports = calculateRentalCost;
