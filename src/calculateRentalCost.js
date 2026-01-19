/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;

  if (days >= 7) {
    return price * days - 50;
  } else if (days >= 3) {
    return price * days - 20;
  } else {
    return price * days;
  }
}

module.exports = calculateRentalCost;
