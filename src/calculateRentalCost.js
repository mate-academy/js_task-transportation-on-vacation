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
  const mediumDiscountStartFrom = 6;
  const largeDiscountStartFrom = 6;

  if (days < mediumDiscountStartFrom) {
    return money;
  }

  if (days <= largeDiscountStartFrom) {
    return money - mediumDiscount;
  }

  return money - largeDiscount;
}

module.exports = calculateRentalCost;
