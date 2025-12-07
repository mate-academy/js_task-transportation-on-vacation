/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const PRICE_PER_DAY = 40
  const numberOfDays = days
  LONG_TERM_DISCOUNT = 50
  SHORT_TERM_DISCOUNT = 20

  const totalAmount = PRICE_PER_DAY * numberOfDays

  if(totalDays >= 7) return totalAmount - LONG_TERM_DISCOUNT
  if(totalDays >= 3) return totalAmount - SHORT_TERM_DISCOUNT
  return totalAmount
}

module.exports = calculateRentalCost;
