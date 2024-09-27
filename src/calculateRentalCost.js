/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let price = days * 40;

  if (days >= 3 && days < 7) {
    price -= 20;
  } else if (days >= 7) {
    price -= 50;
  }

  return price;
}

module.exports = calculateRentalCost;
