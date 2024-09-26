/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayPrice = 40;
  const miniDiscount = 20;
  const basicDiscount = 50;
  let cost = days * dayPrice;

  if (days >= 7) {
    cost = cost - basicDiscount;
  } else if (days >= 3) {
    cost = cost - miniDiscount;
  }

  return cost;
};

module.exports = calculateRentalCost;
