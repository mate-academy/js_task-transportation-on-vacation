/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrise = 40;
  const discontSevenDay = 50;
  const discontThreeDay = 20;

  if (days >= 7) {
    return basePrise * days - discontSevenDay;
  }

  if (days === 6) {
    return basePrise * days - discontThreeDay;
  }

  if (days >= 3) {
    return basePrise * days - discontThreeDay;
  }

  if (days < 3) {
    return basePrise * days;
  }
}

module.exports = calculateRentalCost;
