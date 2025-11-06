/**
 * @param {number} days
 *
 * @return {number}
 */

const LONG_TERM_DURATION_7 = 7;
const LONG_TERM_DURATION_3 = 3;
const LONG_TERM_DISC_7 = 50;
const LONG_TERM_DISC_3 = 20;
const DAILY_PRICE = 40;

function calculateRentalCost(days) {
  if (days >= LONG_TERM_DURATION_7){
    return (days * DAILY_PRICE) - LONG_TERM_DISC_7;
  }

  if (days >= LONG_TERM_DURATION_3){
    return (days * DAILY_PRICE) - LONG_TERM_DISC_3;
  }

  return days * DAILY_PRICE;
}

module.exports = calculateRentalCost;
