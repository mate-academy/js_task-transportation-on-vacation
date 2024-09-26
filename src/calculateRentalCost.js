/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const LONG_TERM = 6;
  const LONG_TERM_DISCOUNT = 50;
  const MIDDLE_TERM_DISCOUNT = 20;
  const STANDART_DAY = 2;

  if (days <= STANDART_DAY) {
    return (days * price);
  }

  if (days <= LONG_TERM) {
    return (days * price) - MIDDLE_TERM_DISCOUNT;
  }

  return (days * price) - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
