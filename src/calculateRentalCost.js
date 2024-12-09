/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let PRICE = days * 40;

  if (days >= 7) {
    PRICE -= 50;
  } else if (days >= 3) {
    PRICE -= 20;
  }

  return PRICE;
}

module.exports = calculateRentalCost;
