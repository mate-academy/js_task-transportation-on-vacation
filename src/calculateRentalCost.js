/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;

  const smallPeriod = 3;
  const smallPeriodDiscount = 20;

  const bigPeriod = 7;
  const bigPeriodDiscount = 50;

  const totalRentalPrice = days * pricePerDay;

  if (days >= bigPeriod) {
    return totalRentalPrice - bigPeriodDiscount;
  }

  if (days >= smallPeriod) {
    return totalRentalPrice - smallPeriodDiscount;
  }

  return totalRentalPrice;
}

module.exports = calculateRentalCost;
