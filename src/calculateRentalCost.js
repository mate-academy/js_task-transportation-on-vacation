/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCONT = 50;
  const LOW_TERM = 3;
  const LOW_TERM_DISCONT = 20;
  const price = days * COST_PER_DAY;

  if (days >= LONG_TERM) {
    return price - LONG_TERM_DISCONT;
  }

  if (days >= LOW_TERM) {
    return price - LOW_TERM_DISCONT;
  }

  return price;

  // if (days < LOW_TERM) {
  //   price = days * COST_PER_DAY;
  // } else if (days >= LOW_TERM) {
  //   price = days * COST_PER_DAY - LOW_TERM_DISCONT;
  // }

  // if (days >= LONG_TERM) {
  //   price = days * COST_PER_DAY - LONG_TERM_DISCONT;
  // }

  // return price;
}

module.exports = calculateRentalCost;
