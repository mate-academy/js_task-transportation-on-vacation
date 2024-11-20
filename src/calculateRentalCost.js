/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceOfDay = 40;
  const discount7day = 50;
  const discount3day = 20;

  if (days >= 7) {
    return (priceOfDay * days) - discount7day;
  } else if (days >= 3) {
    return (priceOfDay * days) - discount3day;
  }
  return priceOfDay * days;
}

module.exports = calculateRentalCost;
