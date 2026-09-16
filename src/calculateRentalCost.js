/**
 * @param {number} days
 *
 * @return {number}
 */

const PRICE_PER_DAY = 40;
const BASIC_DISCOUNT_DAYS = 3;
const BASIC_DISCOUNT = 20;
const ADDITIONAL_DISCOUNT_DAYS = 7;
const ADDITIONAL_DISCOUNT = 50;

function calculateRentalCost(days) {
  const totalPrice = days * PRICE_PER_DAY;

  if (days >= ADDITIONAL_DISCOUNT_DAYS) {
    return totalPrice - ADDITIONAL_DISCOUNT;
  }

  if (days >= BASIC_DISCOUNT_DAYS) {
    return totalPrice - BASIC_DISCOUNT;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
