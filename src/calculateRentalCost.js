/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const carRent = 40;
  const basicDiscount = 20;
  const advancedDiscount = 50;
  const minDiscountDays = 3;
  const maxDiscountDays = 7;

  if (days >= maxDiscountDays) {
    return days * carRent - advancedDiscount;
  }

  if (days >= minDiscountDays) {
    return days * carRent - basicDiscount;
  }

  return days * carRent;
}

module.exports = calculateRentalCost;
