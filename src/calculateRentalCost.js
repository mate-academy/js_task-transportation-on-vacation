/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const ONE_DAY_PRICE = 40;
  const MIDDLE_TERM_SALE = 20;
  const LONG_TERM_SALE = 50;

  let total = 0;

  if (days >= 7) {
    total = ONE_DAY_PRICE * days - LONG_TERM_SALE;
  } else if (days >= 3 && days < 7) {
    total = ONE_DAY_PRICE * days - MIDDLE_TERM_SALE;
  } else {
    total = ONE_DAY_PRICE * days;
  }

  return total;
}

module.exports = calculateRentalCost;
