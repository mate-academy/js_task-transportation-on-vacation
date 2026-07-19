/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const rent = 40;
  const sum = rent * days;

  if (days >= 3 && days < 7) {
    const sumz = sum - 20;

    return sumz;
  }

  if (days >= 7) {
    const sumhh = sum - 50;

    return sumhh;
  }

  return sum;
}

module.exports = calculateRentalCost;
