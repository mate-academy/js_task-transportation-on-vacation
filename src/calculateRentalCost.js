/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRent = 40;
  const bigBonus = 50;
  const smallBonus = 20;

  if (days >= 7) {
    return dayRent * days - bigBonus;
  }

  if (days >= 3) {
    return dayRent * days - smallBonus;
  }

  return dayRent * days;
}

module.exports = calculateRentalCost;
