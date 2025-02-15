/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const totalAmount = days * 40;
  const discountFrom3To7 = 20;
  const discountFrom7 = 50;

  if (days < 3) {
    return totalAmount;
  }

  if (days >= 3 && days < 7) {
    return totalAmount - discountFrom3To7;
  }

  if (days >= 7) {
    return totalAmount - discountFrom7;
  }
}

module.exports = calculateRentalCost;
