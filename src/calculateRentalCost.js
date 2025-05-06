/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const priceOfDay = 40;
  const shortDays = 3;
  const shortDaysDisc = 20;
  const longDays = 7;
  const longDaysDisc = 50;

  if (days >= longDays) {
    return priceOfDay * days - longDaysDisc;
  }

  if (days >= shortDays) {
    return priceOfDay * days - shortDaysDisc;
  }

  return days * priceOfDay;
}

module.exports = calculateRentalCost;
