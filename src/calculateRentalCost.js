/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_DAY = 7;
  const LONG_DAY_DISCOUNT = 50;
  const SHOST_DAY = 3;
  const SHOST_DAY_DISCOUNT = 20;
  const PRICE_ONE_DAY = 40;
  const standasdPrice = days * PRICE_ONE_DAY;

  if (days >= LONG_DAY) {
    return standasdPrice - LONG_DAY_DISCOUNT;
  }

  if (days >= SHOST_DAY) {
    return standasdPrice - SHOST_DAY_DISCOUNT;
  }

  return standasdPrice;
}

module.exports = calculateRentalCost;
