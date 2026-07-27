/* Every day you rent the car costs `$40`.
If you rent the car for `7` or more days, you
get `$50` off your total. Alternatively,
if you rent the car for `3` or more days,you
get `$20` off your total.

Implement `calculateRentalCost` function
that returns the total amount for different
number of days.
*/
/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_PRICE = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM = 3;
  const MEDIUM_TERM_DISCOUNT = 20;
  const rentCost = DAILY_PRICE * days;

  if (days >= LONG_TERM) {
    return rentCost - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM) {
    return rentCost - MEDIUM_TERM_DISCOUNT;
  }

  return rentCost;
}

module.exports = calculateRentalCost;
