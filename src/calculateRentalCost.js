/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = 40;
  const discount50 = 50;
  const discount20 = 20;
  const total = days * cost;

  if (days >= 7) {
    return total - discount50;
  } else if (days >= 3) {
    return total - discount20;
  }

  return total;
}

module.exports = calculateRentalCost;
