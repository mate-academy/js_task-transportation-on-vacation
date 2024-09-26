/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const pricePerDay = 40;
  const premiumDiscount = 20;
  const goldDiscount = 50;

  if (days <= 2) {
    return days * pricePerDay;
  }
  if (days >= 3 && days < 7) {
    return (days * pricePerDay) - premiumDiscount;
  }
  if (days >= 7) {
    return (days * pricePerDay) - goldDiscount;
  }
}

module.exports = calculateRentalCost;
