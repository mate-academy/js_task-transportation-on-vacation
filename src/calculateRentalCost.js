/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const baseDailyRentalCost = 40;
  const discountZero = 0;
  const discountBasic = 20;
  const discountAdditional = 50;

  let rentalCost = days * baseDailyRentalCost;
  let discount = discountZero;

  if (days >= 7) {
    discount = discountAdditional;
  }

  if (days >= 3 && days < 7) {
    discount = discountBasic;
  }

  rentalCost -= discount;

  return rentalCost;
}

module.exports = calculateRentalCost;
