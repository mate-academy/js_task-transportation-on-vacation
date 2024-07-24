/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let money = days * 40;

  if (days >= 7) {
    money = money - 50;
  }

  if (days >= 3 && days < 7) {
    money = money - 20;
  }

  return money;
}

module.exports = calculateRentalCost;
