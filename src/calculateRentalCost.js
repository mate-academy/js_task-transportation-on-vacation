/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceDay = 40;
  const longDay = 7;
  const shortDay = 3;
  const discLongDay = 50;
  const discShortDay = 20;
  const total = days * priceDay;

  if (days >= shortDay && days < longDay) {
    return total - discShortDay;
  }

  if (days >= longDay) {
    return total - discLongDay;
  }

  return total;
}

module.exports = calculateRentalCost;
