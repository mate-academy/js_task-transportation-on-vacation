/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = days * 40;
  const costSmallOff = cost - 20;
  const costBigOff = cost - 50;

  if (days >= 3 && days < 7) {
    return costSmallOff;
  } else if (days >= 7) {
    return costBigOff;
  } else {
    return cost;
  }
}

module.exports = calculateRentalCost;
