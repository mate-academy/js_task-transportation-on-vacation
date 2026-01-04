/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  const price = 40;
  const discountValueFirst = 20;
  const discountValueSecond = 50;
  let discount = 0;

  if (days >= 7) {
    discount = discountValueSecond;
  } else if (days >= 3) {
    discount = discountValueFirst;
  }

  return price * days - discount;
}

module.exports = calculateRentalCost;
