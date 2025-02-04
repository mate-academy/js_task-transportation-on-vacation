/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPrice = days * 40;
  const basicDiscount = 20;
  const greatDiscount = 50;
  const basicDiscountDays = 3;
  const greatDiscountDays = 7;

  if (days >= greatDiscountDays) {
    return rentPrice - greatDiscount;
  }

  if (days >= basicDiscountDays) {
    return rentPrice - basicDiscount;
  }

  return rentPrice;
}

module.exports = calculateRentalCost;
