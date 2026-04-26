/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceDay = 40;
  let total;

  total = priceDay * days;

  if (days >= 7) {
    total = total - 50;
  } else if (days >= 3) {
    total = total - 20;
  }

  return total;
}

module.exports = calculateRentalCost;
