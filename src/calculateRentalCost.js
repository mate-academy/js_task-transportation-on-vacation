/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rental = 40;
  const price = rental * days;

  if (days < 3) {
    return price;
  }

  if (days < 7) {
    return price - 20;
  }

  if (days >= 7) {
    return price - 50;
  }
}

module.exports = calculateRentalCost;
