/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentDayCost = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;
  const smallDiscountMinimalDay = 3;
  const bigDiscountMinimalDay = 7;
  const rentalCost = rentDayCost * days;

  if (days >= bigDiscountMinimalDay) {
    return rentalCost - bigDiscount;
  } else if (days >= smallDiscountMinimalDay) {
    return rentalCost - smallDiscount;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
