/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_COST = 40;
  const BIG_DISCOUNT = 50;
  const SMALL_DISCOUNT = 20;

  const PERIOD_WITHOUT_DISCOUNT = 2;
  const PERIOD_WITH_SMALL_DISCOUNT = 7;

  let price = days * RENT_COST;

  if (days <= PERIOD_WITHOUT_DISCOUNT) {
    return price;
  }

  if (days < PERIOD_WITH_SMALL_DISCOUNT) {
    return (price -= SMALL_DISCOUNT);
  }

  return (price -= BIG_DISCOUNT);
}

module.exports = calculateRentalCost;
