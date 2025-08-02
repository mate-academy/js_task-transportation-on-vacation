/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const defaultPayRent = 40;
  const threeDaysRentOff = 20;
  const sevenDaysRentOff = 50;

  if (days < 7 && days >= 3) {
    return defaultPayRent * days - threeDaysRentOff;
  } else if (days >= 7) {
    return defaultPayRent * days - sevenDaysRentOff;
  }

  return defaultPayRent * days;
}

module.exports = calculateRentalCost;
