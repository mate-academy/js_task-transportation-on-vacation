/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentLongTime = 7;
  const rentSmallTime = 3;
  const rentDefaultCost = 40;
  const saleLongTime = 50;
  const saleSmallTime = 20;

  if (days >= rentSmallTime) {
    return days >= rentLongTime
      ? days * rentDefaultCost - saleLongTime
      : days * rentDefaultCost - saleSmallTime;
  };

  return days * rentDefaultCost;
}

module.exports = calculateRentalCost;
