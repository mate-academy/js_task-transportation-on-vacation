/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;

  if (days < 3) {
    return price * days;
  }

  if (days >= 3 && days < 7) {
    return price * days - 20;
  }

  return price * days - 50;
}

module.exports = calculateRentalCost;
