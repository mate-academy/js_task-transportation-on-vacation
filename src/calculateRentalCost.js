/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRent = 40;

  const smallDiscount = 20;
  const bigDiscount = 50;

  const smallDiscountStartDay = 3;
  const bigDiscountStartDay = 7;

  let amount = dayRent * days;

  if (days >= smallDiscountStartDay && days < bigDiscountStartDay) {
    amount -= smallDiscount;
  } else {
    if (days >= bigDiscountStartDay) {
      amount -= bigDiscount;
    }
  }

  return amount;
}

module.exports = calculateRentalCost;
