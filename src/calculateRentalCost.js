/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = days * 40;
  const SHORT__DAY = 3;
  const LONG__DAY = 7;
  const SHORT__DAY_DISCONT = 20;
  const LONG__DAY_DISCONT = 50;

  if (days <= 0) {
    return 0;
  }

  if (days >= LONG__DAY) {
    return price - LONG__DAY_DISCONT;
  }

  if (days >= SHORT__DAY) {
    return price - SHORT__DAY_DISCONT;
  }

  if (days < SHORT__DAY) {
    return price;
  }
}

module.exports = calculateRentalCost;
