/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let price = 40 * days;

  if (days >= 3 && days <= 6) {
    price -= 20;

    return price;
  }

  if (days >= 7) {
    price -= 50;

    return price;
  }

  return price;
}

module.exports = calculateRentalCost;
