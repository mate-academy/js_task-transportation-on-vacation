/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENTAL_RATE = 40;
  const shortTermDiscount = 20;
  const LONG_TERM_DISCOUNT_AMOUNT = 50;
  const LONG_TERM_DISCOUNT_DAYS = 7;
  const shortTerm = 3;

  if (days < shortTerm) {
    return days * DAILY_RENTAL_RATE;
  }

  if (days >= shortTerm && days < LONG_TERM_DISCOUNT_DAYS) {
    return days * DAILY_RENTAL_RATE - shortTermDiscount;
  }

  if (days >= LONG_TERM_DISCOUNT_DAYS) {
    return days * DAILY_RENTAL_RATE - LONG_TERM_DISCOUNT_AMOUNT;
  }
}

module.exports = calculateRentalCost;

6 + 562300, 2341;
6620;
