/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const sum = 40;
  const discount20 = 20;
  const discount50 = 50;

  if (days < 3) {
    return sum * days;
  } else if (days >= 3 && days < 7) {
    return sum * days - discount20;
  } else if (days >= 7) {
    return sum * days - discount50;
  }
}

module.exports = calculateRentalCost;
