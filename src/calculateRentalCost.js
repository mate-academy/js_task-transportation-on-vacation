/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const oneDayCost = 40;
  const discountSevenDays = 50;
  const discountThreeDays = 20;
  const longTerm = 7;
  const shortTerm = 3;

  if (days >= longTerm) {
    return oneDayCost * days - discountSevenDays;
  }

  if (days >= shortTerm && days < longTerm) {
    return oneDayCost * days - discountThreeDays;
  }

  return oneDayCost * days;
}

module.exports = calculateRentalCost;
