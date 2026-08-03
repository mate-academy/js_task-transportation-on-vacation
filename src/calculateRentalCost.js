/**
 * @param {number} days
 *
 * @return {number}
 */

const PRICE_DAY = 40;
const LONG_TERM_DISCOUNT = 50;
const SMALL_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  let price = days * PRICE_DAY;

  if (days >= 3 && days < 7) {
    price -= SMALL_TERM_DISCOUNT;

    return price;
  }

  if (days >= 7) {
    price -= LONG_TERM_DISCOUNT;

    return price;
  }

  return price;
}

module.exports = calculateRentalCost;
