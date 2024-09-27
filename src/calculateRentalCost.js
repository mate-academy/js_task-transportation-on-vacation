/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayCarRent = 40;
  const sevenDaysCostOff = 50;
  const threeDaysCostOff = 20;

  if (days < 3) {
    return days * dayCarRent;
  } else if (days >= 7) {
    return days * dayCarRent - sevenDaysCostOff;
  } else {
    return days * dayCarRent - threeDaysCostOff;
  }
}
module.exports = calculateRentalCost;
