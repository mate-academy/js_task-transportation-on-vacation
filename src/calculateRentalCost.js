/**
 * @param {number} days
 *
 * @return {number}
 */

const RENT_COST_PER_DAY_DOLLARS = 40;
const DAYS_FOR_DISCOUNT_50_DOLLARS = 7;
const DAYS_FOR_DISCOUNT_20_DOLLARS = 3;
const DISCOUNT_DOLLARS_7_DAYS = 50;
const DISCOUNT_DOLLARS_3_DAYS = 20;

function calculateRentalCost(days) {
  const costWithoutDiscount = days * RENT_COST_PER_DAY_DOLLARS;

  if (days >= DAYS_FOR_DISCOUNT_50_DOLLARS) {
    return costWithoutDiscount - DISCOUNT_DOLLARS_7_DAYS;
  }

  if (days >= DAYS_FOR_DISCOUNT_20_DOLLARS) {
    return costWithoutDiscount - DISCOUNT_DOLLARS_3_DAYS;
  }

  return costWithoutDiscount;
}

module.exports = calculateRentalCost;
