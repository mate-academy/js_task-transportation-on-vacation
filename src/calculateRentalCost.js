/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;

  const MIN_DAYS_FOR_BASIC_DISCOUNT = 3;
  const MAX_DAYS_FOR_BASIC_DISCOUNT = 6;
  const MIN_DAYS_FOR_ADDITIONAL_DISCOUNT = 7;

  const BASIC_DISCOUNT = 20;
  const ADDITIONAL_DISCOUNT = 50;
  const pricePerDay = PRICE_PER_DAY;
  let total = days * pricePerDay;

  if (
    days >= MIN_DAYS_FOR_BASIC_DISCOUNT &&
    days <= MAX_DAYS_FOR_BASIC_DISCOUNT
  ) {
    total -= BASIC_DISCOUNT;
  } else if (days >= MIN_DAYS_FOR_ADDITIONAL_DISCOUNT) {
    total -= ADDITIONAL_DISCOUNT;
  }

  return total;
}

module.exports = calculateRentalCost;
