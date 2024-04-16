/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  const disountForSevenDays = 50;
  const disountForThreeDays = 20;

  if (days > 6) {
    return (days * costPerDay) - disountForSevenDays;
  }

  if (days > 2) {
    return (days * costPerDay) - disountForThreeDays;
  }

  return days * costPerDay;
}

module.exports = calculateRentalCost;
