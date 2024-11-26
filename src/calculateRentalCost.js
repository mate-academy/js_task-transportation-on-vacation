/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basicDiscount = 20;
  const bigDiscount = 50;
  const dailyRent = 40;
  let total = days * dailyRent;

  if (days >= 7) {
    total -= bigDiscount;

    return total;
  }

  if (days >= 3) {
    total -= basicDiscount;
  }

  return total;
}

module.exports = calculateRentalCost;
