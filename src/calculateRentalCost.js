/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let price = days * 40;

  if (days >= 7) {
    price -= 50;
  } else if (days >= 3) {
    price -= 20;
  }

  return price;
  // write code here
}

module.exports = calculateRentalCost;
