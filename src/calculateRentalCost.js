/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costsDay = 40;
  let sum = 0;

  if (days >= 7) {
    sum = (days * costsDay) - 50;
  } else if (days >= 3) {
    sum = (days * costsDay) - 20;
  } else {
    sum = days * costsDay;
  }

  return sum;
}

module.exports = calculateRentalCost;
