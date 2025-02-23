/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERN = 7;
  const LONG_TERN_DISCOUNT = 50;
  const SHIRT_TERN = 3;
  const SHIRT_TERN_DISCOUNT = 20;
  let price = days * PRICE_PER_DAY;

  if (days >= LONG_TERN) {
    price -= LONG_TERN_DISCOUNT;
  } else if (days >= SHIRT_TERN) {
    price -= SHIRT_TERN_DISCOUNT;
  }

  return price;
}

module.exports = calculateRentalCost;
