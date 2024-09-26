/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let sumOfRent = 0;
  const DAY_RENT_PRICE = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  for (let i = 0; i < days; i++) {
    sumOfRent += DAY_RENT_PRICE;
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    sumOfRent -= SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    sumOfRent -= LONG_TERM_DISCOUNT;
  }

  return sumOfRent;
}

module.exports = calculateRentalCost;
