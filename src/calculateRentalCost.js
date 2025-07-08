/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_TERM = 2;
  const LONG_TERM = 7;
  const LONG_DAY_DISCOUNT = 50;
  const SHORT_DAY_DISCOUNT = 20;
  const PRICE_FOR_DAY = 40;
  let price = 0;

  if (days >= LONG_TERM) {
    price = PRICE_FOR_DAY * days - LONG_DAY_DISCOUNT;

    return price;
  }

  if (days > SHORT_TERM) {
    price = PRICE_FOR_DAY * days - SHORT_DAY_DISCOUNT;

    return price;
  } else {
    price = PRICE_FOR_DAY * days;

    return price;
  }
}

module.exports = calculateRentalCost;
