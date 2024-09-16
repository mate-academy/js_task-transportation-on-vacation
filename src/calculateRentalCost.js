/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const oneDayRent = 40;
  const discountMoreSevenDays = 50;
  const discountMoreThreeDays = 20;

  if (days >= 7) {
    return oneDayRent * days - discountMoreSevenDays;
  }

  if (days >= 3) {
    return oneDayRent * days - discountMoreThreeDays;
  }

  return oneDayRent * days;
}

module.exports = calculateRentalCost;
