/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRentalCar = 40;
  let discount = 0;

  if (days >= 3 && days <= 6) {
    discount = 20;
  } else if (days >= 7) {
    discount = 50;
  }

  const totalCost = dailyRentalCar * days - discount;

  return totalCost;
}

module.exports = calculateRentalCost;
