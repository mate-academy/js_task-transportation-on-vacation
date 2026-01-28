/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const LONG_TERM_RENTAL_DAYS = 7;
  const MID_TERM_RENTAL_DAYS = 3;
  const discounttwenty = 20;
  const discountfifty = 50;
  const COST_PER_DAY = 40;
  const rentalcost = days * COST_PER_DAY;

  if (days >= LONG_TERM_RENTAL_DAYS) {
    return rentalcost - discountfifty;
  }

  if (days >= MID_TERM_RENTAL_DAYS) {
    return rentalcost - discounttwenty;
  }

  return rentalcost;
}

module.exports = calculateRentalCost;
