/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const money = days * 40;

  if (days < 3) {
    return money;
  }

  if (days <= 6) {
    return money - 20;
  }

  return money - 50;
}

module.exports = calculateRentalCost;
