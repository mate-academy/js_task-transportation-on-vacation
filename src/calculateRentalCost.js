/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const oneDayCost = 40;
  const threeDays = 3;
  const sevenDays = 7;
  const minTermDiscount = 20;
  const longTermDiscount = 50;
  const totalPrise = days * oneDayCost;

  if (days < threeDays) {
    return totalPrise;
  }

  if (days >= threeDays && days < sevenDays) {
    return totalPrise - minTermDiscount;
  }

  if (days >= sevenDays) {
    return totalPrise - longTermDiscount;
  }
}

module.exports = calculateRentalCost;
