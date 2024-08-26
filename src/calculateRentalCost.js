/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const MIN_DAYS_FOR_DISCOUNT = 3;
  const LONG_TERM = 7;
  const PRICE = 40;
  let sale = 20;

  if (days >= MIN_DAYS_FOR_DISCOUNT && days < LONG_TERM) {
    return days * PRICE - sale;
  }

  if (days >= LONG_TERM) {
    sale = 50;

    return days * PRICE - sale;
  }

  return days * PRICE;
}

module.exports = calculateRentalCost;
