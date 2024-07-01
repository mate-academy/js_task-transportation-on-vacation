'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const Price = 40;
  const ShortTerm = 3;
  const ShortDiscount = 20;
  const LongTerm = 7;
  const LongDiscount = 50;
  const TotalPrice = Price * days;

  if (days >= LongTerm) {
    return TotalPrice - LongDiscount;
  }

  if (days >= ShortTerm) {
    return TotalPrice - ShortDiscount;
  }

  return TotalPrice;
}

module.exports = calculateRentalCost;
