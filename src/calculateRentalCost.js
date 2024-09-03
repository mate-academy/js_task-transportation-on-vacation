/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayPrice = 40;
  const discount1 = 20;
  const discount2 = 50;
  const total = dayPrice * days;

  if (days < 3) {
    return total;
  }

  if (days < 7) {
    return total - discount1;
  }

  return total - discount2;
}
module.exports = calculateRentalCost;
