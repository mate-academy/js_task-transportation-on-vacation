/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentOrdinary = 40;
  const threeDaysOff = 20;
  const sevenDaysOff = 50;

  if (days >= 7) {
    return (rentOrdinary * days) - sevenDaysOff;
  } else if (days >= 3 && days < 7) {
    return rentOrdinary * days - threeDaysOff;
  }

  return days * rentOrdinary;
}

module.exports = calculateRentalCost;
