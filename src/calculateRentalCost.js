/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePricePerDay = 40;
  const daysForSmallDiscount = 3;
  const daysForBigDiscount = 7;
  const smallDiscountValue = 20;
  const bigDiscountValue = 50;

  const discount =
    days < daysForSmallDiscount
      ? 0
      : days >= daysForBigDiscount
        ? bigDiscountValue
        : smallDiscountValue;

  return basePricePerDay * days - discount;
}

module.exports = calculateRentalCost;
