/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const everyDayRent = 40;
  const discount7AndMore = 50;
  const discount3AndMore = 20;

  if (days < 3) {
    return days * everyDayRent;
  }

  if (days > 2 && days < 7) {
    return days * everyDayRent - discount3AndMore;
  }

  if (days > 6) {
    return days * everyDayRent - discount7AndMore;
  }
}

module.exports = calculateRentalCost;
