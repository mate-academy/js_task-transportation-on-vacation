/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let total = days * 40;
  const smallDiscount = 20;
  const bigDiscount = 50;

  if (days >= 7) {
    total -= bigDiscount;
  } else if (days >= 3) {
    total -= smallDiscount;
  }

  return total;
}

module.exports = calculateRentalCost;
