/*
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PriseDay = 40;

  if (days < 3) {
    return days * PriseDay;
  } else if (days >= 3 && days < 7) {
    return days * PriseDay - 20;
  } else {
    return days * PriseDay - 50;
  }
}

module.exports = calculateRentalCost;
