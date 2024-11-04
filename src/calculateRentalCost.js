/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_PER_DAY = 7;
  const LONG_PER_DISCONT = 50;
  const SHORT_PER_DAY = 3;
  const SHORT_PER_DISCONT = 20;
  let price = days * PRICE_PER_DAY;

  if (days >= LONG_PER_DAY) {
    price -= LONG_PER_DISCONT;
  } else if (days >= SHORT_PER_DAY) {
    price -= SHORT_PER_DISCONT;
  }

  return price;
}

module.exports = calculateRentalCost;
