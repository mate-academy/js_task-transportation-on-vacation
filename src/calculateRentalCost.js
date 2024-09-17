/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRent = 40;
  const discount7Days = 50;
  const discount3Days = 20;

  if (days >= 7) {
    return dayRent * days - discount7Days;
  } else if (days >= 3 && days < 7) {
    return dayRent * days - discount3Days;
  }

  return dayRent * days;
}

module.exports = calculateRentalCost;
