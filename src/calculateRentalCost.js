/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costForCarPerDay = 40;
  let discount = 0;
  if (days >= 7) {
    discount = 50;
  } else if (days >= 3) {
    discount = 20;
  }

  return costForCarPerDay * days - discount;
}

module.exports = calculateRentalCost;
