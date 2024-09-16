/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = 40;
  const discount1 = 20;
  const discount2 = 50;
  if (days < 3) {
    return cost * days;
  }
  if (days >= 3 && days < 7) {
    return cost * days - discount1;
  }
  if (days >= 7) {
    return cost * days - discount2;
  }
}

module.exports = calculateRentalCost;
