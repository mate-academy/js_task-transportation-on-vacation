/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const CAR_COST = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MIDDLE_TERM = 3;
  const MIDDLE_TERM_DISCOUNT = 20;
  let totalCost = 0;
  if(days >= LONG_TERM)
  {
    totalCost= (CAR_COST * days) - LONG_TERM_DISCOUNT;
  }
  else if(days >= MIDDLE_TERM )
  {
    totalCost = (CAR_COST * days) - MIDDLE_TERM_DISCOUNT;
  }
  else
  {
    totalCost = CAR_COST * days;
  }
  return totalCost;
}

module.exports = calculateRentalCost;
