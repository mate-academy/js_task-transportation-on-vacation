/**
 * @param {number} days
 *
 * @return {number}
 */
const dailyRate = 40;

function calculateRentalCost(days) {
  if (days >= 7) {
    const result1 = dailyRate * days - 50;

    return result1;
  }

  if (days >= 3) {
    const result2 = dailyRate * days - 20;

    return result2;
  }

  if (days < 3) {
    const result3 = dailyRate * days;

    return result3;
  }
}

module.exports = calculateRentalCost;
