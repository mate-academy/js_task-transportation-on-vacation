/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const discount20 = 20;
  const discount50 = 50;
  if ((days >= 3) && (days < 7)) {
    return price * days - discount20;
  }
  if (days >= 7) {
    return price * days - discount50;
  }
  return price * days;
}

module.exports = calculateRentalCost;
