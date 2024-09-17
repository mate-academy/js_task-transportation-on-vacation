/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  let totalCoast = 0;
  let discount = 0;
  const discountOne = 20;
  const discountTwo = 50;

  if (days >= 3 && days < 7) {
    discount = discountOne;
  }

  if (days >= 7) {
    discount = discountTwo;
  }

  totalCoast = (days * costPerDay) - discount;

  return totalCoast;
}

module.exports = calculateRentalCost;
