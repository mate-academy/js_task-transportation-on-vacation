/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceForDay = 40;
  const basicDiscount = 20;
  const extraDiscount = 50;

  if (days >= 3 && days < 7) {
    return priceForDay * days - basicDiscount;
  }

  if (days >= 7) {
    return priceForDay * days - extraDiscount;
  }

  return priceForDay * days;
}

module.exports = calculateRentalCost;
