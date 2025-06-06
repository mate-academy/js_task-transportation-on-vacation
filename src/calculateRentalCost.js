/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(numberOfDays) {
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const basePrice = numberOfDays * 40; // $40 per day

  if (numberOfDays < SHORT_TERM) {
    // $40 per day with no discount for less than 3 days
    return basePrice;
  }

  if (numberOfDays >= SHORT_TERM && numberOfDays < LONG_TERM) {
    // $40 per day with $20 discount for 3 to 6 days
    return basePrice - SHORT_TERM_DISCOUNT;
  }

  if (numberOfDays >= LONG_TERM) {
    // $40 per day with $50 discount for 7 or more days
    return basePrice - LONG_TERM_DISCOUNT;
  }

  // In case of invalid input, return 0;
  return 0;
}

module.exports = calculateRentalCost;
