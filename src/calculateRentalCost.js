/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPrice = 40;
  const maxDayOff = 7;
  const maxDayOffPrice = 50;
  const minDayOff = 3;
  const minDayOffPrice = 20;

  if (days >= maxDayOff) {
    return (days * rentPrice) - maxDayOffPrice;
  } else if (days >= minDayOff) {
    return (days * rentPrice) - minDayOffPrice;
  } else {
    return days * rentPrice;
  }
}

module.exports = calculateRentalCost;
