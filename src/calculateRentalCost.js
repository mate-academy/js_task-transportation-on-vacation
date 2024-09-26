/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const discountWeek = 50;
  const discountThreeDays = 20;
  const totalPrice = days * price;

  if (days >= 7) {
    return totalPrice - discountWeek;
  }

  if (days >= 3 && days < 7) {
    return totalPrice - discountThreeDays;
  }

  if (days < 3) {
    return totalPrice;
  }
}

module.exports = calculateRentalCost;
