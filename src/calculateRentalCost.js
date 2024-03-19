/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceforOneDay = 40;
  const totalPrice = days * priceforOneDay;
  const shortRent = 3;
  const longRent = 7;
  const shortRentDiscount = 20;
  const longRentDiscount = 50;

  if (days >= longRent) {
    return totalPrice - longRentDiscount;
  }

  if (days >= shortRent) {
    return totalPrice - shortRentDiscount;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
