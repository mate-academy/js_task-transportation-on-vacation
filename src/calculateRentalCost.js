/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const CAR_COSTS_PER_DAY = 40;

  const MIN_TERM = 3;
  const MIN_TERM_DISCOUNT = 20;

  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const basePrice = days * CAR_COSTS_PER_DAY;

  switch (true) {
    case days < MIN_TERM:
      return basePrice;

    case
      days >= MIN_TERM
      && days <= LONG_TERM - 1:
      return basePrice - MIN_TERM_DISCOUNT;

    case days >= LONG_TERM:
      return basePrice - LONG_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
