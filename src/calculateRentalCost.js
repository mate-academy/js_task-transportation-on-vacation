/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let payment = 0;

  if (days >= 7) {
    payment = days * 40 - 50;
  } else if (days >= 3) {
    payment = days * 40 - 20;
  } else {
    payment = days * 40;
  }

  return payment;
}

module.exports = calculateRentalCost;
