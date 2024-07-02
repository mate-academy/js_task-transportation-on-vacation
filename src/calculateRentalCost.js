/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let total = 0;
  const LONG_TERM = 7;
  const SHIRT_TERM = 3;
  const LONG_TERM_DISKONT = 50;
  const SHIRT_TERM_DISKONT = 20;
  const PRICE_RENT = 40;

  if (days < SHIRT_TERM) {
    return (total += days * PRICE_RENT);
  }

  if (days >= SHIRT_TERM && days < LONG_TERM) {
    return (total += days * PRICE_RENT - SHIRT_TERM_DISKONT);
  }

  if (days >= LONG_TERM) {
    return (total += days * PRICE_RENT - LONG_TERM_DISKONT);
  }
}

module.exports = calculateRentalCost;
