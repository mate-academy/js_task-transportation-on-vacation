/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceOfDay = 40;
  const shortTime = 3;
  const longTime = 7;
  const shortDiscont = 20;
  const longDiscont = 50;

  if (days >= longTime) {
    return priceOfDay * days - longDiscont;
  }

  if (days >= shortTime) {
    return priceOfDay * days - shortDiscont;
  }

  return priceOfDay * days;
}
module.exports = calculateRentalCost;
