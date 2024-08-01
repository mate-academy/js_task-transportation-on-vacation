/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // The car coste calculator
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  let price = days * 40;

  if (days >= 7) {
    price -= LONG_TERM_DISCOUNT;

    return price;
  }

  if (days >= 3) {
    price -= SHORT_TERM_DISCOUNT;

    return price;
  }

  return price;
}

module.exports = calculateRentalCost;
