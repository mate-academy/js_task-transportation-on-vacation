/**
 * @param {number} days
 *
 * @return {number}
 */
const PRICE_PER_DAY = 40;
const SMALL_DISCOUNT = 20;
const BIG_DISCOUNT = 50;

const SMALL_DISCOUNT_FROM = 3;
const BIG_DISCOUNT_FROM = 7;

function calculateRentalCost(days) {
  const totalPrice = PRICE_PER_DAY * days;

  if (days >= SMALL_DISCOUNT_FROM && days < BIG_DISCOUNT_FROM) {
    return totalPrice - SMALL_DISCOUNT;
  }

  if (days >= BIG_DISCOUNT_FROM) {
    return totalPrice - BIG_DISCOUNT;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
