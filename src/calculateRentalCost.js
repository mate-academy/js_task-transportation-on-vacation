/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRentalPrice = 40;
  const extendedDiscountDays = 7;
  const extendedDiscountAmount = 50;
  const basicDiscountAmount = 20;
  const basicDiscountDays = 3;
  const rentalCost = dailyRentalPrice * days;

  if (days >= extendedDiscountDays) {
    return rentalCost - extendedDiscountAmount;
  } else if (days >= basicDiscountDays) {
    return rentalCost - basicDiscountAmount;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
