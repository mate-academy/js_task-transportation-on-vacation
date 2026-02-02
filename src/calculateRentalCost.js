/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_PRICE = 40;
  const SEVEVEN_DAYS_DISCOUNT = 50;
  const THREE_DAYS_DISCOUNT = 20;
  const DAYS_SHORT_TERM = 3;
  const DAYS_LONG_TERM = 7;
  let rentFullPrice = 0;

  for (let i = 0; i < days; i++) {
    rentFullPrice += DAILY_PRICE;
  }

  if (days >= DAYS_SHORT_TERM && days < DAYS_LONG_TERM) {
    rentFullPrice -= THREE_DAYS_DISCOUNT;
  }

  if (days >= DAYS_LONG_TERM) {
    rentFullPrice -= SEVEVEN_DAYS_DISCOUNT;
  }

  return rentFullPrice;
}

module.exports = calculateRentalCost;
