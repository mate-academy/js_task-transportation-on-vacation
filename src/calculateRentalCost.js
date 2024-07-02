/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  const NORMAL_PRICE = 40;
  const MID_TERM = 3;
  const MID_TERM_DISC = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISC = 50;

  let finalPrice = days * NORMAL_PRICE;

  if (days >= LONG_TERM) {
    return (finalPrice -= LONG_TERM_DISC);
  }

  if (days >= MID_TERM) {
    return (finalPrice -= MID_TERM_DISC);
  }

  return finalPrice;
}

module.exports = calculateRentalCost;
