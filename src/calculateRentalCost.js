/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASE_COST = 40;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const totalCost = BASE_COST * days;

  switch (true) {
    case days < SHORT_TERM:
      return totalCost;
    case days < LONG_TERM:
      return totalCost - SHORT_TERM_DISCOUNT;
    case days >= LONG_TERM:
      return totalCost - LONG_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
