/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const discountSmall = 20;
  const discountBig = 50;
  const minDay = 3;
  const moreDay = 7;

  let result = days * price;

  if (days >= moreDay) {
    result = result - discountBig;
  } else if (days >= minDay) {
    result = result - discountSmall;
  }

  return result;
}

module.exports = calculateRentalCost;
