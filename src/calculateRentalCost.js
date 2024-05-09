/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let cost = 0;
  const oneDayCost = 40;
  const durationShort = 3;
  const durationAverage = 7;
  const discountAverage = 20;
  const discountLong = 50;

  cost = days * oneDayCost;

  if (days >= durationShort) {
    cost = (days * oneDayCost) - discountAverage;
  }

  if (days >= durationAverage) {
    cost = (days * oneDayCost) - discountLong;
  }

  return cost;
}

module.exports = calculateRentalCost;
