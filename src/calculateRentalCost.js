/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const valuePerDay = 40;

  const maxDaysDiscount = 7;
  const minDaysDiscount = 3;
  const discountMin = 20;
  const discountMax = 50;

  if (days >= maxDaysDiscount) {
    return valuePerDay * days - discountMax;
  } else if (days >= minDaysDiscount) {
    return valuePerDay * days - discountMin;
  }

  return days * valuePerDay;
}

module.exports = calculateRentalCost;
