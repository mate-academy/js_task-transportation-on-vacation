/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const count = 40;
  const discount = count * days;

  if (days >= 3 && days <= 6) {
    return discount - 20;
  }

  if (days >= 7) {
    return discount - 50;
  }

  return count * 2;
}

module.exports = calculateRentalCost;
