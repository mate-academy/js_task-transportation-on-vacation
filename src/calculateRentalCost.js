/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  const cost7Days = 50;
  const cost3Days = 20;
  const sumAllDays = days * costPerDay;

  if (days >= 7) {
    return sumAllDays - cost7Days;
  } else if (days >= 3) {
    return sumAllDays - cost3Days;
  } else {
    return sumAllDays;
  }
}

module.exports = calculateRentalCost;
