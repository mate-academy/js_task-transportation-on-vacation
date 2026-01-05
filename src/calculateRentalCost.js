/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  const BASIC_PRICE = 40;
  const DISCOUNT_AMOUNT_3_DAYS = 20;
  const DISCOUNT_AMOUNT_7_DAYS = 50;
  const AMOUNT_RENTAL_3_DAYS = 3;
  const AMOUNT_RENTAL_7_DAYS = 7;
  const CALC_FORMULA = days * BASIC_PRICE;

  if (days >= AMOUNT_RENTAL_7_DAYS) {
    return CALC_FORMULA - DISCOUNT_AMOUNT_7_DAYS;
  }

  if (days >= AMOUNT_RENTAL_3_DAYS) {
    return CALC_FORMULA - DISCOUNT_AMOUNT_3_DAYS;
  }

  return CALC_FORMULA;
}

module.exports = calculateRentalCost;
