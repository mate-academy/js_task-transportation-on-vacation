/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceForOneDay = 40;
  const normalTerm = 3;

  const longTerm = 7;

  if (days >= longTerm) {
    return days * priceForOneDay - 50;
  } else if (days >= normalTerm) {
    return days * priceForOneDay - 20;
  } else if (days < normalTerm) {
    return priceForOneDay * days;
  }
}

module.exports = calculateRentalCost;
