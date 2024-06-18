/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const everydayCost = 40;
  let summCost = everydayCost * days;

  if (days >= 3 && days < 7) {
    return (summCost = summCost - 20);
  } else if (days >= 7) {
    return (summCost = summCost - 50);
  } else {
    return summCost;
  }
}

module.exports = calculateRentalCost;
