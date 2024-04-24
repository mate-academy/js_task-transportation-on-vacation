/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(
  days,
  SHORT_TERM_DISCOUNT = 20,
  LONG_TERM_DISCOUNT = 50,
  DAILY_PAYMENT = 40,
  SHORT_TERM_STAY = 3,
  LONG_TERM_STAY = 7,
) {
  let pricetopay = days * DAILY_PAYMENT;

  if (days >= LONG_TERM_STAY) {
    pricetopay -= LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM_STAY) {
    pricetopay -= SHORT_TERM_DISCOUNT;
  }

  return pricetopay;
}

module.exports = calculateRentalCost;
