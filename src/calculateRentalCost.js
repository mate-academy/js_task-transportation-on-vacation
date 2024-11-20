/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const discountFor3Days = 20;
  const discoutnFor7Days = 50;
  const carRentalPrice = 40;

  if (days >= 3 && days < 7) {
    return days * carRentalPrice - discountFor3Days;
  } else if (days >= 7) {
    return days * carRentalPrice - discoutnFor7Days;
  }

  return days * carRentalPrice;
}
module.exports = calculateRentalCost;
