/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENT = 40;
  const THREE_DAYS_DISCOUNT = 20;
  const SEVEN_DAYS_DISCOUNT = 50;
  const TOTAL_PAYMENT = days * DAILY_RENT;

  switch (true) {
    case days >= 7:
      return TOTAL_PAYMENT - SEVEN_DAYS_DISCOUNT;

    case days >= 3:
      return TOTAL_PAYMENT - THREE_DAYS_DISCOUNT;

    default:
      return TOTAL_PAYMENT;
  }
}

module.exports = calculateRentalCost;
