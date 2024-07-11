/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let price = days * 40;

  if (days >= 3 && days <= 6) {
    price = price - 20;
  } else if (days >= 7) {
    price = price - 50;
  }

  return price;
}

module.exports = calculateRentalCost;
