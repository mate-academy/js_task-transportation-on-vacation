/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const DISCOUNT_3_DAYS = 20;
  const DISCOUNT_7_DAYS = 50;

  const rentalCost = days * DAILY_RATE;
  let discount = 0;

  if (days >= 3) {
    discount = DISCOUNT_3_DAYS;
  }

  if (days >= 7) {
    discount = DISCOUNT_7_DAYS;
  }

  return rentalCost - discount;
}

module.exports = calculateRentalCost;
