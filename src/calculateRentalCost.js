/**
 * @param {number} days
 *
 * @return {number}
 */

const constants = {
  PRICE_PER_DAY: 40,
  SHORT_TERM: 3,
  LONG_TERM: 7,
  DISCOUNT_MAX: 50,
  DISCOUNT_MIN: 20,
};

function calculateRentalCost(days) {
  const { SHORT_TERM, LONG_TERM, PRICE_PER_DAY, DISCOUNT_MAX, DISCOUNT_MIN } =
    constants;

  let priceWithoutDiscount = PRICE_PER_DAY * days;

  if (days >= LONG_TERM) {
    priceWithoutDiscount -= DISCOUNT_MAX;
  } else if (days >= SHORT_TERM && days < LONG_TERM) {
    priceWithoutDiscount -= DISCOUNT_MIN;
  }

  return priceWithoutDiscount;
}

module.exports = calculateRentalCost;
