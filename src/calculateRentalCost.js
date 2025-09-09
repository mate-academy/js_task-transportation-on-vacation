/**
 * @param {number} numberOfDays
 * @return {number}
 */
function calculateRentalCost(numberOfDays) {
  // Named constants
  const DAILY_RATE = 40;
  const MID_TERM_DAYS = 3;
  const MID_TERM_DISCOUNT = 20;
  const LONG_TERM_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;

  const baseTotal = numberOfDays * DAILY_RATE;

  if (numberOfDays >= LONG_TERM_DAYS) return baseTotal - LONG_TERM_DISCOUNT;
  if (numberOfDays >= MID_TERM_DAYS) return baseTotal - MID_TERM_DISCOUNT;

  return baseTotal; // less than MID_TERM_DAYS, no discount
}

module.exports = calculateRentalCost;
