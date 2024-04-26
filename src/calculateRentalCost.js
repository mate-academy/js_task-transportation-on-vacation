/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DEFAULT_PRICE = 40;
  const LONG_TERMIN = 7;
  const SHORT_TERMIN = 3;
  const LONG_DISCOUNT = 50;
  const SHORT_DISCOUNT = 20;

  let price = days * DEFAULT_PRICE;

  if (days >= LONG_TERMIN) {
    return (price -= LONG_DISCOUNT);
  }

  if (days >= SHORT_TERMIN && days < LONG_TERMIN) {
    return (price -= SHORT_DISCOUNT);
  }

  return price;
}

module.exports = calculateRentalCost;
