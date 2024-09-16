/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  const saleSevenDaysMore = 50;
  const saleThreeDaysMore = 20;
  if (days < 3) {
    return days * costPerDay;
  } else if (days >= 7) {
    return days * costPerDay - saleSevenDaysMore;
  } else {
    return days * costPerDay - saleThreeDaysMore;
  }
}

module.exports = calculateRentalCost;
