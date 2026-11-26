/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let discount = 0;
  const dailyRate = 40;

  if (days >= 7) {
    discount = 50;
  } else if (days >= 3) {
    discount = 20;
  }

  const rate = dailyRate * days - discount;

  return rate;
}

module.exports = calculateRentalCost;
