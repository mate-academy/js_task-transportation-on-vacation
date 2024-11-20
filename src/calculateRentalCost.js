/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  if (days <= 0) {
    return null;
  }

  const dayPrice = 40;
  const basicDiscount = 20;
  const additionalDiscount = 50;
  let total = dayPrice * days;

  if (days >= 3 && days < 7) {
    total = total - basicDiscount;
  } else if (days >= 7) {
    total = total - additionalDiscount;
  }

  return total;
}

module.exports = calculateRentalCost;
