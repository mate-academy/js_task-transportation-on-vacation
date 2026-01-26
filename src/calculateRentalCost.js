/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const Price = 40;
  const ShotTermDiscount = 20;
  const LongTermDiscount = 50;
  const AllPrice = Price * days;
  const LongTermDays = 7;
  const ShotTermDays = 3;

  if (days >= LongTermDays) {
    return AllPrice - LongTermDiscount;
  }

  if (days >= ShotTermDays) {
    return AllPrice - ShotTermDiscount;
  }

  return AllPrice;
  // write code here
}

module.exports = calculateRentalCost;
