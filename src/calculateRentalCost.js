/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const PRICE_PER_DAY = 40;
  const LONG_TERN = 7;
  const SHORT_TERN = 3;
  const LONG_TERN_DISKOUNT = 50;
  const SHORT_TERN_DISKOUNT = 20;

  let price = days * PRICE_PER_DAY;

  if (days >= LONG_TERN) {
    return (price -= LONG_TERN_DISKOUNT);
  }

  if (days >= SHORT_TERN) {
    return (price -= SHORT_TERN_DISKOUNT);
  }

  return price;
}

module.exports = calculateRentalCost;
