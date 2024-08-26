/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_RENT_PRICE = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const FULL_TERM = 7;
  const FULL_TERM_DISCOUNT = 50;
  let price = days * DAY_RENT_PRICE;

  if (days >= FULL_TERM) {
    price -= FULL_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    price -= SHORT_TERM_DISCOUNT;
  }

  return price;
}

module.exports = calculateRentalCost;
