/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  const discountSevenDays = 50;
  const discountThreeDays = 20;

  if (days >= 7) {
    return costPerDay * days - discountSevenDays;
  }

  if (days >= 3) {
    return (costPerDay * days) - discountThreeDays;
  }

  return costPerDay * days;
}

module.exports = calculateRentalCost;
