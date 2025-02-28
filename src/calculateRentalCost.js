/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let RENTAL_COST = 40;
  let MID_TERM = 3;
  let LONG_TERM = 7;
  let MID_TERM_DISCOUNT = 20;
  let LONG_TERM_DISCOUNT = 50;

  if (days < MID_TERM) {
    return days * RENTAL_COST;
  }

  if (days >= MID_TERM && days < LONG_TERM) {
    return (days * RENTAL_COST) - MID_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return (days * RENTAL_COST) - LONG_TERM_DISCOUNT;
  }
  
}

module.exports = calculateRentalCost;
