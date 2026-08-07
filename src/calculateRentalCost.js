/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERN = 7;
  const LONG_TERN_DISCONT = 50;
  const SHORT_TERN = 3;
  const SHORT_TERN_DISCONT = 20;
  const cost = days * PRICE_PER_DAY;
  let totalAmount = 0;

  if (days < SHORT_TERN) {
    return totalAmount = cost;
  }

  if (days >= LONG_TERN) {
    return totalAmount = cost - LONG_TERN_DISCONT;
  }

  if (days >= SHORT_TERN && days < LONG_TERN) {
    return totalAmount = cost - SHORT_TERN_DISCONT;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
