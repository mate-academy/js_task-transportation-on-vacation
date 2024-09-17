/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const ONE_DAY_PRICE = 40;
  const MIDDLE_TERM_SALE = 20;
  const LONG_TERM_SALE = 50;
  const LONG_TERM = 7;
  const MIDDLE_TERM = 3;

  let total = 0;

  if (days >= LONG_TERM) {
    total = ONE_DAY_PRICE * days - LONG_TERM_SALE;
  } else if (days >= MIDDLE_TERM && days < LONG_TERM) {
    total = ONE_DAY_PRICE * days - MIDDLE_TERM_SALE;
  } else {
    total = ONE_DAY_PRICE * days;
  }

  return total;
}

module.exports = calculateRentalCost;
