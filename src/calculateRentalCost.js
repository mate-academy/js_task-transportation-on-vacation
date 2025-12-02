/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  if (days === 0){
    return 0;
  }
  if (days < 3) {
    return days * DAILY_RATE;
  }

  if (days >= 3 && days < 7) {
    return days * DAILY_RATE - 20;
  }

  if (days >= 7) {
    return days * DAILY_RATE - 50;
  }
}

module.exports = calculateRentalCost;
