/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;

  const totalCost = days * dailyRate;

  let discount = 0;

  if (days >= 7) {
    discount = 50;
  } else if (days >= 3) {
    discount = 20;
  }

  return totalCost - discount;
}

module.exports = calculateRentalCost;
