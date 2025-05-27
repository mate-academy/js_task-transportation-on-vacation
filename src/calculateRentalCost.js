/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let ammount = 0;

  for (let i = 0; i < days; i++) {
    ammount += 40;
  }

  if (days < 3) {
    return ammount;
  } else if (days < 7) {
    return ammount - 20;
  } else {
    return ammount - 50;
  }
}

module.exports = calculateRentalCost;
