/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const BASIC_DISCOUNT = 20;
  const ADDITIONAL_DISCOUNT = 50;

  if (days < 3) {
    return days * DAILY_RATE; // No discount
  }

  if (days >= 3 && days <= 6) {
    return (
      days * DAILY_RATE - BASIC_DISCOUNT // Basic discount
    );
  }

  return (
    days * DAILY_RATE - ADDITIONAL_DISCOUNT // Additional discount for 7+ days
  );
}

module.exports = calculateRentalCost;
