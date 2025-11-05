/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_FEE = 40;
  const DISCOUNT_3_DAYS = 20;
  const DISCOUNT_7_DAYS = 50;

  const totalCost = days * DAILY_FEE;

  return (
    totalCost - (days >= 7 ? DISCOUNT_7_DAYS : days >= 3 ? DISCOUNT_3_DAYS : 0)
  );
}

module.exports = calculateRentalCost;
