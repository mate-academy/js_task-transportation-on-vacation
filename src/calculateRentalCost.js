/**
 * @param {number} days
 *
 * @return {number}
 */
/**
 * Обчислює вартість оренди авто з урахуванням знижок.
 * @param {number} days
 * @return {number}
 */

const DAILY_RATE = 40;

const LONG_TERM = 7;
const MID_TERM = 3;

const LONG_TERM_DISCOUNT = 50;
const MID_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  const base = days * DAILY_RATE;

  if (days >= LONG_TERM) {
    return base - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM) {
    return base - MID_TERM_DISCOUNT;
  }

  return base;
}

module.exports = calculateRentalCost;
