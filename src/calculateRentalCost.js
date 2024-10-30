/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const oneDay = 40;
  const dayPrice = oneDay * days;
  let discount = 0;

  if (days >= 0 && days <= 2) {
    return dayPrice;
  }

  if (days >= 7) {
    discount = 50;

    return dayPrice - discount;
  } else if (days >= 3) {
    discount = 20;

    return dayPrice - discount;
  }
}

module.exports = calculateRentalCost;
