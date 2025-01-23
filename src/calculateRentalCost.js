/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let cost = 0;
  const price = 40;

  if (days <= 2) {
    cost = days * price;

    return cost;
  }

  if (days <= 6) {
    cost = days * price - 20;

    return cost;
  }

  if (days >= 7) {
    cost = days * price - 50;

    return cost;
  }
}

module.exports = calculateRentalCost;
