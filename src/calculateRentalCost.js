/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const oneDayRent = 40;
  const discountMoreSevenDays = 50;
  const discountMoreThreeDays = 20;

  let sumForRent = 0;

  if (days >= 7) {
    sumForRent = oneDayRent * days - discountMoreSevenDays;

    return sumForRent;
  }

  if (days >= 3) {
    sumForRent = oneDayRent * days - discountMoreThreeDays;

    return sumForRent;
  }

  return oneDayRent * days;
}

module.exports = calculateRentalCost;
