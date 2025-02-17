/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TER = 7;
  const LONG_TER_DISCONT = 50;
  const SHIRT_TER = 3;
  const SHIRT_TER_DISCONT = 20;
  let price = days * PRICE_PER_DAY;

  if (days >= LONG_TER) {
    price -= LONG_TER_DISCONT;
  } else if (days >= SHIRT_TER) {
    price -= SHIRT_TER_DISCONT;
  }

  return price;
}

module.exports = calculateRentalCost;
