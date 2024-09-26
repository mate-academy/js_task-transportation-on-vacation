/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPriceOfDay = 40;
  const minDiscount = 20;
  const maxDiscount = 50;
  const maxDiscountDay = 7;
  const minDiscountDay = 3;
  const startDiscountDay = 0;

  const rentalCostStandard = days * rentPriceOfDay;
  const rentalCostMinDiscount = rentalCostStandard - minDiscount;
  const rentalCostMaxDiscount = rentalCostStandard - maxDiscount;

  if (days >= maxDiscountDay) {
    return rentalCostMaxDiscount;
  }

  if (days >= minDiscountDay && days < maxDiscountDay) {
    return rentalCostMinDiscount;
  }

  if (days > startDiscountDay && days < minDiscountDay) {
    return rentalCostStandard;
  }
}

module.exports = calculateRentalCost;
