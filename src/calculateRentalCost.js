/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  let COUNT_MONEY = 0;
  const PRICE_ONE_DAY = 40;
  const TOTAL_AMOUNT = PRICE_ONE_DAY * days;
  const DISCOUNT_THREE_DAYS = 20;
  const DISCOUNT_SEVEN_DAYS = 50;
  const THREE_DAY = 3;
  const SEVEN_DAY = 7;

  if (days < THREE_DAY) {
    COUNT_MONEY = TOTAL_AMOUNT;
  }

  if (days >= THREE_DAY) {
    COUNT_MONEY = TOTAL_AMOUNT - DISCOUNT_THREE_DAYS;
  }

  if (days >= SEVEN_DAY) {
    COUNT_MONEY = TOTAL_AMOUNT - DISCOUNT_SEVEN_DAYS;
  }

  return COUNT_MONEY;
}

module.exports = calculateRentalCost;
