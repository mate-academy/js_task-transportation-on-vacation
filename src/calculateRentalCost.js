/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const DISCOUNT_IF_LONG = 50;
  const DISCOUNT_IF_MIDDLE = 20;
  const LONG_TERM = 7;
  const MIDDLE_TERM = 3;

  let price = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    price -= DISCOUNT_IF_LONG;
  } else if (days >= MIDDLE_TERM) {
    price -= DISCOUNT_IF_MIDDLE;
  }

  return price;
}

module.exports = calculateRentalCost;
