/**
 * Calculates the total cost of renting a car based on the number of days.
 *
 * @param {number} numberOfDays - The number of days the car is rented.
 * @returns {number} The total rental cost after applying applicable discounts.
 */
function calculateRentalCost(numberOfDays) {
  const DAILY_RENTAL_COST = 40;
  const LONG_TERM_THRESHOLD = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_THRESHOLD = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const totalBasePrice = numberOfDays * DAILY_RENTAL_COST;

  if (numberOfDays >= LONG_TERM_THRESHOLD) {
    return totalBasePrice - LONG_TERM_DISCOUNT;
  }

  if (numberOfDays >= SHORT_TERM_THRESHOLD) {
    return totalBasePrice - SHORT_TERM_DISCOUNT;
  }

  return totalBasePrice;
}
