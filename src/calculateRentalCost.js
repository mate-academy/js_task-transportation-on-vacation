/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_COST = 40;

  const MIDDLE_TERM = 3;
  const MIDDLE_TERM_DISCOUNT = 20;

  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  let price = days * RENT_COST;

  if (days >= MIDDLE_TERM && days < LONG_TERM) {
    price -= MIDDLE_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    price -= LONG_TERM_DISCOUNT;
  }

  return price;
}

module.exports = calculateRentalCost;
