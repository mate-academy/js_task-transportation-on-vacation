/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const PRICE_PER_DAY = 40;
  const RENT = days * PRICE_PER_DAY;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const SMALL_DISCOUNT = 20;
  const BIG_DISCOUNT = 50;
  let discount = 0;
  let rentWithDiscount = 0;

  switch (true) {
    case (days >= LONG_TERM):
      discount = BIG_DISCOUNT;
      break;
    case (days >= SHORT_TERM):
      discount = SMALL_DISCOUNT;
  }

  rentWithDiscount = RENT - discount;

  return rentWithDiscount;
}

module.exports = calculateRentalCost;
