/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAILY_RATE = 40;
  const DISCOUNT3DAYS = 20;
  const DISCOUNT7DAYS = 50;
  const MINDISCOUNT = 3;
  const MAXDISCOUNT = 7;

  let total = days * DAILY_RATE;

  if (days >= MINDISCOUNT && days < MAXDISCOUNT) {
    total -= DISCOUNT3DAYS;
  } else if (days >= MAXDISCOUNT) {
    total -= DISCOUNT7DAYS;
  }

  return total;
}
module.exports = calculateRentalCost;
