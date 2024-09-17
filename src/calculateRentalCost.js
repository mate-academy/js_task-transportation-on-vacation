/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = days * 40;
  const discountBasic = price - 20;
  const discountPlus = price - 50;

  if (days < 3) {
    return price;
  } else if (days < 7) {
    return discountBasic;
  }

  return discountPlus;
}

module.exports = calculateRentalCost;
