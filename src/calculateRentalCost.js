/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rent = 40;
  let discount = 0;
  const minDiscount = 20;
  const maxDiscount = 50;
  const maxPeriodDiscount = 7;
  const minPeriodDiscount = 3;

  if (days >= maxPeriodDiscount) {
    discount = maxDiscount;
  } else if (days >= minPeriodDiscount) {
    discount = minDiscount;
  }

  return rent * days - discount;
}

module.exports = calculateRentalCost;
