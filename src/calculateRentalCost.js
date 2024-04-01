/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = days * 40;

  if (days < 3) {
    return price;
  } else if (days <= 6) {
    return price - 20;
  } else {
    return price - 50;
  }
}

module.exports = calculateRentalCost;
