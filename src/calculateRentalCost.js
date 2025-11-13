/**
 * @param {number} days
 *
 * @return {number}
 */

const calculateRentalCost = (days) => {
  const DAILY_RENTAL_COST = 40;
  const SUM_RENTAL_COST = days * DAILY_RENTAL_COST;

  if (days >= 7) {
    return SUM_RENTAL_COST - 50;
  }

  if (days >= 3) {
    return SUM_RENTAL_COST - 20;
  }

  return SUM_RENTAL_COST;
};

module.exports = calculateRentalCost;
