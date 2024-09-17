/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayPrice = 40;
  const basicDiscount = 50;
  const minimalDiscount = 20;

  if (days >= 7) {
    return (days * dayPrice) - basicDiscount;
  }

  if (days >= 3) {
    return (days * dayPrice) - minimalDiscount;
  }

  return days * dayPrice;
}

module.exports = calculateRentalCost;
