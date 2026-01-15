/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const OneDayPay = 40;
  const LongTerm = 7;
  const LongTermDiscount = 50;
  const MediumTerm = 3;
  const MediumTermDiscount = 20;

  if (days >= LongTerm) {
    return days * OneDayPay - LongTermDiscount;
  }

  if (days >= MediumTerm) {
    return days * OneDayPay - MediumTermDiscount;
  }

  return days * OneDayPay;
}

module.exports = calculateRentalCost;
