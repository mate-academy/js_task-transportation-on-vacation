/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENTAL_RATE = 40;
  let sum = DAILY_RENTAL_RATE * days;

  if (days >= 7) {
    sum -= 50;
  } else if (days >= 3) {
    sum -= 20;
  }

  return sum;
}

module.exports = calculateRentalCost;
