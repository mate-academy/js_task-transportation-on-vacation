/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let result = 0;
  const carRent = 40;
  const firstDiscountDays = 3;
  const secondDiscountDays = 7;

  const firstDiscount = 20;
  const secondDiscount = 50;

  result = carRent * days;

  if (days >= secondDiscountDays) {
    result = result - secondDiscount;

    return result;
  }

  if (days >= firstDiscountDays) {
    result = result - firstDiscount;
  }

  return result;
}

module.exports = calculateRentalCost;
