/**
 * @param {number}
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let sumOfDays = 40 * days;

  if (days >= 7) {
    sumOfDays -= 50;
  } else if (days >= 3) {
    sumOfDays -= 20;
  }

  return sumOfDays;
}

module.exports = calculateRentalCost;
