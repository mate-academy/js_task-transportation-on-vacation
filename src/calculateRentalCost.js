/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let diskount = 0;

  if (days >= 7) {
    diskount = 50;
  } else if (days >= 3) {
    diskount = 20;
  }

  return days * 40 - diskount;
}

module.exports = calculateRentalCost;
