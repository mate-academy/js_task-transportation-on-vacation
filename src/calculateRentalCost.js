/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  let totalCost = 0;
  const saleThreeOrMoreDays = 20;
  const saleSevenOrMoreDays = 50;

  if (days < 3) {
    totalCost = days * costPerDay;
  } else if (days >= 7) {
    totalCost = (days * costPerDay) - saleSevenOrMoreDays;
  } else {
    totalCost = (days * costPerDay) - saleThreeOrMoreDays;
  }
  return totalCost;
}

module.exports = calculateRentalCost;
