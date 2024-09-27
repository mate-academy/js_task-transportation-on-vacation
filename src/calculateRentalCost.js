/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basicDiscount = 50;
  const alternativeDiscount = 20;
  const basicDays = 7;
  const alternativeDays = 3;
  const paymentAmount = 40;

  if (days >= basicDays) {
    return days * paymentAmount - basicDiscount;
  }

  if (days >= alternativeDays) {
    return days * paymentAmount - alternativeDiscount;
  }

  return days * paymentAmount;
}

module.exports = calculateRentalCost;
