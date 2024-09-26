/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basicDiscountDays = 3;
  const additionalDiscountDays = 7;
  const basicDiscount = 20;
  const additionalDiscount = 50;
  const cost = 40;
  let total = cost * days;

  if (days >= additionalDiscountDays) {
    total -= additionalDiscount;
  } else if (days >= basicDiscountDays) {
    total -= basicDiscount;
  }

  return total;
}

module.exports = calculateRentalCost;
