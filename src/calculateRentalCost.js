/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const ONE_DAY_RENT = 40;
  let TOTAL_PRICE = 0;
  let DISCOUNT = 0;

  if (days < 3) {
    DISCOUNT = 0;
    TOTAL_PRICE = ONE_DAY_RENT * days;
  } else if (days >= 3 && days < 7) {
    DISCOUNT = 20;
    TOTAL_PRICE = ONE_DAY_RENT * days - DISCOUNT;
  } else if (days >= 7) {
    DISCOUNT = 50;
    TOTAL_PRICE = ONE_DAY_RENT * days - DISCOUNT;
  }

  return TOTAL_PRICE;
}

module.exports = calculateRentalCost;
