/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priseOfDay = 40;
  let total = priseOfDay * days;

  if (days >= 7) {
    total -= 50;

    return total;
  }

  if (days >= 3) {
    total -= 20;
  }

  return total;
}

module.exports = calculateRentalCost;
