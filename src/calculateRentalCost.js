/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let number = 0;

  if (days < 3) {
    number = days * 40;
  } else if (days >= 3 && days < 7) {
    number = days * 40 - 20;
  } else if (days >= 7) {
    number = days * 40 - 50;
  }

  return number;
}

module.exports = calculateRentalCost;
