/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const daylyRent = 40;
  const amount = days * daylyRent;
  let discount = 0;

  if (days < 3) {
    return amount;
  }

  if (days >= 3 && days < 7) {
    discount = 20;

    return amount - discount;
  }

  if (days >= 7) {
    discount = 50;

    return amount - discount;
  }
}

module.exports = calculateRentalCost;
