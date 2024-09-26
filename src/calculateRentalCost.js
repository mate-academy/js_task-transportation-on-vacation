/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let total = 0;
  const smalldiscount = 20;
  const bigdiscount = 50;

  const count = days * 40;

  if (days >= 3) {
    total = count - smalldiscount;
  }

  if (days >= 7) {
    total = count - bigdiscount;
  }

  if (days < 3) {
    total = count;
  }

  return total;
}

module.exports = calculateRentalCost;
