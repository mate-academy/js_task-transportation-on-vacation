/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;

  if (days < 3) {
    return pricePerDay * days;
  } else if (days >= 3 && days <= 6) {
    return pricePerDay * days - 20;
  }

  return pricePerDay * days - 50;
}

module.exports = calculateRentalCost;
