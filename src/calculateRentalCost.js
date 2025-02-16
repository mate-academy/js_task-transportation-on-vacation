/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_BASIC = 40;

  const DISCOUNT_SMALL = 20;
  const DISCOUNT_BIG = 50;

  const TERM_MEDIUM = 3;
  const TERM_BIG = 7;

  const basicCost = PRICE_BASIC * days;
  let totalCost = basicCost;

  switch (true) {
    case (days < TERM_MEDIUM):
      return totalCost;

    case (days >= TERM_MEDIUM && days < TERM_BIG):
      totalCost -= DISCOUNT_SMALL;

      return totalCost;

    case (days >= TERM_BIG):
      totalCost -= DISCOUNT_BIG;

      return totalCost;
  }
}

module.exports = calculateRentalCost;
