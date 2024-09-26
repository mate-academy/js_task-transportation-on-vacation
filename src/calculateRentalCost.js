/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT = 40;
  const SMALL_DISCOUNT = 20;
  const BIG_DISCOUNT = 50;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;

   if (days >= LONG_TERM) {
    return (days * RENT) - BIG_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    return (days * RENT) - SMALL_DISCOUNT;
  } else {
    return days * RENT;
  }
}

module.exports = calculateRentalCost;
