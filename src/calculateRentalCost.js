'use strict';

/**
 * After a challenging quarter in the office, you've decided
 * to take a vacation. You plan to book a flight for yourself
 * and your family to leave all the stress behind.
 *
 * During your vacation, you'll need a rental car to get around.
 * The car rental manager has some enticing offers for you.
 *
 * The daily cost of renting a car is $40. If you rent the car
 * for 7 or more days, you receive a $50 discount on the total.
 * Alternatively, if you rent the car for 3 or more days,
 * you get a $20 discount on the total.
 *
 * Implement the calculateRentalCost function,
 * which returns the total amount for a different number of days.
 *
 * Examples:
 *  - calculateRentalCost(1) === 40
 *  - calculateRentalCost(3) === 100
 *  - calculateRentalCost(7) === 230
 *
 * @param {number} rentalDays
 *
 * @return {number}
 */

function calculateRentalCost(rentalDays) {
  const DAILY_RENTAL_FEE = 40;
  const LONG_TERM_THRESHOLD = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_THRESHOLD = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (rentalDays >= LONG_TERM_THRESHOLD) {
    return rentalDays * DAILY_RENTAL_FEE - LONG_TERM_DISCOUNT;
  }

  if (rentalDays >= SHORT_TERM_THRESHOLD) {
    return rentalDays * DAILY_RENTAL_FEE - SHORT_TERM_DISCOUNT;
  }

  return rentalDays * DAILY_RENTAL_FEE;
}

module.exports = calculateRentalCost;
