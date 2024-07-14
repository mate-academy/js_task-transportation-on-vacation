/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  const perDay = 40;
  const longDay = 7;
  const shortDay = 3;
  const discLongDay = 50;
  const discShortDay = 20;

  const total = days * perDay;

  if (days >= longDay) {
    return total - discLongDay;
  }

  if (days >= shortDay && days < longDay) {
    return total - discShortDay;
  }

  return total;
}

module.exports = calculateRentalCost;
