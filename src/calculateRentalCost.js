/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rent = 40;
  const LONG_TERM = 7;
  const MID_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM_DISCOUNT = 20;
  let amount = 0;

  if (days < MID_TERM) {
    amount = rent * days;
  }

  if (days >= MID_TERM && days < LONG_TERM) {
    amount = rent * days - MID_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    amount = rent * days - LONG_TERM_DISCOUNT;
  }

  return amount;
}

module.exports = calculateRentalCost;
