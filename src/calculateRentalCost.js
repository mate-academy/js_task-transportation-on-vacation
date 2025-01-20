/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // simple solution
  // let baseCost = days * 40;

  // // 2. Перевірка знижок
  // if (days >= 7) {
  //   baseCost -= 50;
  // } else if (days >= 3) {
  //   baseCost -= 20;
  // }

  // return baseCost;

  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const baseCost = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return baseCost - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return baseCost - SHORT_TERM_DISCOUNT;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
