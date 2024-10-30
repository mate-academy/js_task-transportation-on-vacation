/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let price = 40 * days;

  if (days >= 7) {
    price -= 50;
  } else if (days >= 3) {
    price -= 20;
  }
  
  return price;
}

module.exports = calculateRentalCost;
