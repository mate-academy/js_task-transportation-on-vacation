/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPrice = 40;
  const largeRentalDiscountDays = 7;
  const smallRentalDiscountDays = 3;
  const longRentalDiscount = 50;
  const shortRentalDiscount = 20;

  if (days >= largeRentalDiscountDays) {
    return days * rentPrice - longRentalDiscount;
  }

  if (days >= smallRentalDiscountDays) {
    return days * rentPrice - shortRentalDiscount;
  }

  return days * rentPrice;
}

module.exports = calculateRentalCost;
