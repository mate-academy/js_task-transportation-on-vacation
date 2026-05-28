/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const RENTAL_COST_PER_DAY = 40;
  const DISCOUNT_BIG = 50;
  const DISCOUNT_SMALL = 20;
  const rentalCost = RENTAL_COST_PER_DAY * days;

  const totalCost =
    days < 3
      ? rentalCost
      : days < 7
        ? rentalCost - DISCOUNT_SMALL
        : days >= 7
          ? rentalCost - DISCOUNT_BIG
          : 'WRONG NUMBER';

  return totalCost;
}

module.exports = calculateRentalCost;
