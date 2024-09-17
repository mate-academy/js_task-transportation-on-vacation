/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const discount3Days = 20;
  const discount7Days = 50;
  const totalAmount = 40;

  if (days >= 7) {
    return totalAmount * days - discount7Days;
  } else if (days >= 3) {
    return totalAmount * days - discount3Days;
  }

  return totalAmount * days; ;
}

module.exports = calculateRentalCost;
