/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const PRICE_PER_DAY = 40;
  const LONG__TERM = 7;
  const LONG__TERM__DISCOUNT = 50;
  const SHORT__TERM = 3;
  const SHORT__TERM__DISCOUNT = 20;

  const basePrise = days * PRICE_PER_DAY;

  if (days >= LONG__TERM) {
    return basePrise - LONG__TERM__DISCOUNT;
  } else if (days >= SHORT__TERM) {
    return basePrise - SHORT__TERM__DISCOUNT;
  }

  return basePrise;
}

module.exports = calculateRentalCost;
