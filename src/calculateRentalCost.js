/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const oneDayRent = 40;
  let sumForRent = 0;

  if (days >= 7) {
    sumForRent = oneDayRent * days - 50;

    return sumForRent;
  }

  if (days >= 3) {
    sumForRent = oneDayRent * days - 20;

    return sumForRent;
  }

  return oneDayRent * days;
}

module.exports = calculateRentalCost;
