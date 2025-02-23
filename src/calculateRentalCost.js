/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COUNT__CASH = 40 * days;
  const LONG__TEMP = 7;
  const SHORT__TEMP = 3;
  const LONG__TEMP__DISCOUNT = 30;
  const SHORT__TEMP__DISCOUNT = 20;

  if (days >= LONG__TEMP) {
    return COUNT__CASH - LONG__TEMP__DISCOUNT - SHORT__TEMP__DISCOUNT;
  }

  if (days >= SHORT__TEMP) {
    return COUNT__CASH - SHORT__TEMP__DISCOUNT;
  }

  return COUNT__CASH;
}

module.exports = calculateRentalCost;
