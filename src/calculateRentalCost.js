/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PAY_PER_DAY = 40;
  const MIN_DISCOUNT = 20;
  const MAX_DISCOUNT = 50;

  const INITIAL_DISCOUNT = 0;
  const DAYS_FOR_MINDISCOUNT = 3;
  const DAYS_FOR_MAXDISCOUNT = 7;

  let sale = INITIAL_DISCOUNT;

  if (days >= DAYS_FOR_MINDISCOUNT) {
    sale = MIN_DISCOUNT;
  }

  if (days >= DAYS_FOR_MAXDISCOUNT) {
    sale = MAX_DISCOUNT;
  }

  const totalCost = days * PAY_PER_DAY - sale;

  return totalCost;
}

module.exports = calculateRentalCost;
