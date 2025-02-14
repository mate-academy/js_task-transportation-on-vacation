/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRent = 40;
  const shortDaysDiscount = 20;
  const longDaysDiscount = 50;
  const allTimeRent = days * dailyRent;

  if (days >= 7) {
    return allTimeRent - longDaysDiscount;
  }

  if (days >= 3) {
    return allTimeRent - shortDaysDiscount;
  }

  return allTimeRent;
}

module.exports = calculateRentalCost;
