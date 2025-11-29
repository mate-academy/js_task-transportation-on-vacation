/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY__REST = 40;
  const NO_DISCOUNT_MAX_DAYS = 2;
  const SHORT__TERM = 3;
  const SHORT__TERM__DISCOUNT = 20;
  const LONG__TERM = 7;
  const LONG__TERM__DISCOUNT = 50;
  const RENT__COST = days * DAILY__REST;

  if (days <= NO_DISCOUNT_MAX_DAYS) {
    return RENT__COST;
  }

  if (days >= SHORT__TERM && days < LONG__TERM) {
    return RENT__COST - SHORT__TERM__DISCOUNT;
  }

  if (days >= LONG__TERM) {
    return RENT__COST - LONG__TERM__DISCOUNT;
  }

  return RENT__COST;
}

module.exports = calculateRentalCost;
