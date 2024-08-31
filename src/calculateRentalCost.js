/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentDay = 40;
  let fullAmount = 0;

  for (let i = 1; i <= days; i++) {
    fullAmount += rentDay;
  }

  if (days >= 7) {
    fullAmount = fullAmount - 50;

    return fullAmount;
  }

  if (days >= 3) {
    fullAmount = fullAmount - 20;

    return fullAmount;
  }

  return fullAmount;
}

module.exports = calculateRentalCost;
