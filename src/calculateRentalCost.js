/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayPrice = 40;
  const totalPrice = days * dayPrice;
  const discountBasic = 20;
  const discountForWeek = 50;

  if (days >= 7) {
    return totalPrice - discountForWeek;
  }

  if (days >= 3) {
    return totalPrice - discountBasic;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
