/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const rentPerDay = 40;
  const totalAmount = days * rentPerDay;
  const basicDiscount = 50;
  const minorDiscount = 20;

  if (days >= 3 && days < 7) {
    return totalAmount - minorDiscount;
  }

  if (days >= 7) {
    return totalAmount - basicDiscount;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
