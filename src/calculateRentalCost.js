/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_RENTAL = 40;
  const SALE_LONG_PERIOD = 50;
  const SALE_SHORT_PERIOD = 20;
  const SUM_RENTAL_STANDART = days * PRICE_RENTAL;

  if (days >= 7) {
    return SUM_RENTAL_STANDART - SALE_LONG_PERIOD;
  }

  if (days >= 3) {
    return SUM_RENTAL_STANDART - SALE_SHORT_PERIOD;
  }

  return SUM_RENTAL_STANDART;
}

module.exports = calculateRentalCost;
