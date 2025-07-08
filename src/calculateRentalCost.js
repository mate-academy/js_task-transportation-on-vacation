/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let discount = 0;
  const rent = days * 40;

  if (days < 3) {
    discount = 0;
  }

  if (days >= 3 && days < 7) {
    discount = 20;
  }

  if (days >= 7) {
    discount = 50;
  }

  return rent - discount;
}

module.exports = calculateRentalCost;
