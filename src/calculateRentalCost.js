/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const oneDayRent = 40;
  const discountMoreSevenDays = 50;
  const discountMoreThreeDays = 20;

  let sumRent = 0;

  if (days >= 7) {
    sumRent = oneDayRent * days - discountMoreSevenDays;

    return sumRent;
  }

  if (days >= 3) {
    sumRent = oneDayRent * days - discountMoreThreeDays;

    return sumRent;
  }

  return oneDayRent * days;
}

module.exports = calculateRentalCost;
