/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalSum = 40 * days;
  const moreThanThree = totalSum - 20;
  const moreThanWeek = totalSum - 50;

  if (days >= 7) {
    return moreThanWeek;
  }

  if (days >= 3) {
    return moreThanThree;
  }

  return totalSum;
}

module.exports = calculateRentalCost;
