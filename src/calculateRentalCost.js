/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_DAY = 40;
  const PRICE_FOR_RENT = days * PRICE_DAY;
  const AVARAGE_SALE = 20;
  const BIG_SALE = 50;
  const AVARAGE_TERM = 3;
  const BIG_TERM = 7;

  if (days >= BIG_TERM) {
    return PRICE_FOR_RENT - BIG_SALE;
  } else if (days >= AVARAGE_TERM) {
    return PRICE_FOR_RENT - AVARAGE_SALE;
  }

  return PRICE_FOR_RENT;
}

module.exports = calculateRentalCost;
