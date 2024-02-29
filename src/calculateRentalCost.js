/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const rentalPricePerDay = 40;
  const threeDaysBonus = 20;
  const sevenDaysBonus = 50;
  const fuulPrice = days * rentalPricePerDay;

  return days < SHORT_TERM
    ? fuulPrice
    : days < LONG_TERM
      ? fuulPrice - threeDaysBonus
      : fuulPrice - sevenDaysBonus;
}

module.exports = calculateRentalCost;
