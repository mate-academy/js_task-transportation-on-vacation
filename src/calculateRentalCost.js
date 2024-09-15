/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const threeDaysDiscount = 20;
  const sevenDaysDiscount = 50;
  let totalPrice = days * pricePerDay;

  if (days >= 3) {
    totalPrice = pricePerDay * days - threeDaysDiscount;
  }

  if (days >= 7) {
    totalPrice = pricePerDay * days - sevenDaysDiscount;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
