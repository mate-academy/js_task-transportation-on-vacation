/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;

  const firstDiscountDays = 3;
  const firstDiscount = 20;

  const secondDiscountDays = 7;
  const secondDiscount = 50;

  const total = days * pricePerDay;

  if (days >= secondDiscountDays) {
    return total - secondDiscount;
  }

  if (days >= firstDiscountDays) {
    return total - firstDiscount;
  }

  return total;
}

module.exports = calculateRentalCost;
