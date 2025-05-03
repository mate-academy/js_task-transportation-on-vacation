/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAILY_RENTAL_COST = 40;
  const SHORT_TERM_RENTAL = 3;
  const LONG_TERM_RENTAL = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  // calculate how much the rental car will cost based on rate and # of days
  let totalRentalCost = DAILY_RENTAL_COST * days;

  // check if the car is rented for 3 or more days, but less than 7 days
  if (days >= SHORT_TERM_RENTAL && days < LONG_TERM_RENTAL) {
    totalRentalCost -= SHORT_TERM_DISCOUNT;
  }

  // check if the car is rented for 7 or more days
  if (days >= LONG_TERM_RENTAL) {
    totalRentalCost -= LONG_TERM_DISCOUNT;
  }

  return totalRentalCost;
}

module.exports = calculateRentalCost;
