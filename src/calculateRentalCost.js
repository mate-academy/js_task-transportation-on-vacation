/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const sumPerDay = 40;
  let payOFF = 0;

  if (days >= 7) {
    payOFF += 50;
  } else if (days >= 3) {
    payOFF += 20;
  }

  return days * sumPerDay - payOFF;
}

module.exports = calculateRentalCost;
