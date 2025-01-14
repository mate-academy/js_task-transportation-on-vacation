/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceForOneDay = 40;
  const discountForThreeDays = 20;
  const discountForSevenDays = 50;

  let priceForDays = days * priceForOneDay;

  if (days >= 7) {
    priceForDays = priceForDays - discountForSevenDays;
  } else if (days >= 3) {
    priceForDays = priceForDays - discountForThreeDays;
  }

  return priceForDays;
}

module.exports = calculateRentalCost;
