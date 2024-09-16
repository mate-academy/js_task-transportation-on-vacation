/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const regularPrice = 40;
  const minDiscount = 20;
  const maxDiscount = 50;
  const totalAmount = regularPrice * days;
  const daysForSmallDiscount = 3;
  const daysForBigDiscount = 7;

  if (days >= daysForBigDiscount) {
    return totalAmount - maxDiscount;
  }

  if (days >= daysForSmallDiscount) {
    return totalAmount - minDiscount;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
