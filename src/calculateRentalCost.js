/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  // const rentPrice = 40;

  //   if (days < 3) {
  //     return days * rentPrice;
  //   }

  //   if (days >= 3 && days <= 6) {
  //     return days * rentPrice - 20;
  //   }

  //   if (days >= 7) {
  //     return days * rentPrice - 50;
  //   }
  // }

  const RENT_PRICE_PER_DAY = 40;

  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return RENT_PRICE_PER_DAY * days - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return RENT_PRICE_PER_DAY * days - SHORT_TERM_DISCOUNT;
  }

  return RENT_PRICE_PER_DAY * days;
}

module.exports = calculateRentalCost;
