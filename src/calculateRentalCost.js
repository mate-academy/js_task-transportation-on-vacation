/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const SEVEN_DAYS = 7;
  const THREE_DAYS = 3;
  const DISCOUNT_7_DAYS = 50;
  const DISCOUNT_3_TO_6_DAYS = 20;

  let totalCost = days * DAILY_RATE;

  if (days >= SEVEN_DAYS) {
    totalCost -= DISCOUNT_7_DAYS;
  } else if (days >= THREE_DAYS && days < SEVEN_DAYS) {
    totalCost -= DISCOUNT_3_TO_6_DAYS;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
