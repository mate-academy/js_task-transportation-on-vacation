/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRent = 40;
  const money = days * dailyRent;
  const mediumDiscount = 20;
  const largeDiscount = 50;

  if (days < 3) {
    return money;
  }

  if (days <= 6) {
    return money - mediumDiscount;
  }

  return money - largeDiscount;
}

module.exports = calculateRentalCost;
