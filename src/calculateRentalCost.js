/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SMALL_DISCOUNT = {
    dayRequirement: 3,
    discountSum: 20,
  };
  const LARGER_DISCOUNT = {
    dayRequirement: 7,
    discountSum: 50,
  };

  let price = days * 40;

  if (days >= LARGER_DISCOUNT.dayRequirement) {
    price -= LARGER_DISCOUNT.discountSum;
  } else if (days >= SMALL_DISCOUNT.dayRequirement) {
    price -= SMALL_DISCOUNT.discountSum;
  }

  return price;
}

module.exports = calculateRentalCost;
