/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const discountPerWeek = 50;
  const discountPerThreeDey = 20;

  const basePriceForDay = days * pricePerDay;
  let totalPrice = 0;

  if (days >= 7) {
    totalPrice = basePriceForDay - discountPerWeek;
  } else if (days >= 3) {
    totalPrice = basePriceForDay - discountPerThreeDey;
  } else {
    totalPrice = basePriceForDay;
  }
  return totalPrice;
}

module.exports = calculateRentalCost;
