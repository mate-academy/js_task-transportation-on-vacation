/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayPrice = 40;
  const weekDiscount = 50;
  const threeDayDiscount = 20;

  let price = days * dayPrice;

  if (days >= 7) {
    price = price - weekDiscount;
  }

  if (days >= 3 && days < 7) {
    price = price - threeDayDiscount;
  }

  return price;
}

module.exports = calculateRentalCost;
