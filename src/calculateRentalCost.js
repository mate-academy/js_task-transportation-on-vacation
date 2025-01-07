/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let costs = 0;
  let discount = 0;
  const payForDay = 40;
  const threeDaysOfRent = 3;
  const sevenDaysOfRent = 7;

  if (days >= threeDaysOfRent) {
    discount = 20;
  }

  if (days >= sevenDaysOfRent) {
    discount = 50;
  }

  costs = days * payForDay - discount;

  return costs;
}

module.exports = calculateRentalCost;
