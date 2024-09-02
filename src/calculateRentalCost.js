/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costRentOfPerDay = 40;
  let totalCost = days * costRentOfPerDay;

  if (days >= 7) {
    return (totalCost -= 50);
  }

  if (days >= 3) {
    return (totalCost -= 20);
  }

  return 80;
}
module.exports = calculateRentalCost;
