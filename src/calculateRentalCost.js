/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rent = 40;
  const discountBig = 50;
  const discountSmall = 20;
  const minDay = 3;
  const maxDay = 7;
  let cost = days * rent;

  if (days < minDay) {
    return cost;
  }

  if (days < maxDay) {
    cost -= discountSmall;
  }

  if (days >= maxDay) {
    cost -= discountBig;
  }

  return cost;
}

module.exports = calculateRentalCost;
