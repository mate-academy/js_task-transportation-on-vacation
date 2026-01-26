/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const Price = 40;
  const shotTermDiscount = 20;
  const LongTermDiscount = 50;
  const AllPrice = Price * days;

  if (days >= 7) {
    return AllPrice - LongTermDiscount;
  }

  if (days >= 3) {
    return AllPrice - shotTermDiscount;
  }

  return AllPrice;
  // write code here
}

module.exports = calculateRentalCost;
