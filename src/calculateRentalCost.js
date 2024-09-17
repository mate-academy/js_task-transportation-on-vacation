/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASIC_PRICE = 40;
  const FIRST_DISCOUNT = 20;
  const SECOND_DISCOUNT = 50;
  const sum = BASIC_PRICE * days;

  if (days >= 7) {
    return sum - SECOND_DISCOUNT;
  }

  if (days >= 3) {
    return sum - FIRST_DISCOUNT;
  }

  return sum;
}

module.exports = calculateRentalCost;
