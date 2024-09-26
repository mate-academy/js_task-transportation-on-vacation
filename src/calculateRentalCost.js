/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const GET_FOR_THREE = 20;
  const GET_FOR_SEVEN = 50;
  const RENT_THREE_UP = 3;
  const RENT_SEVEN_UP = 7;
  const totalPrice = days * COST_PER_DAY;

  if (days >= RENT_SEVEN_UP) {
    return totalPrice - GET_FOR_SEVEN;
  }

  if (days >= RENT_THREE_UP) {
    return totalPrice - GET_FOR_THREE;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
