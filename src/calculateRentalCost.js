/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let cost = d * 40;

    if (d >= 7) {
        cost -= 50;
    } else if (d >= 3) {
        cost -= 20;
    }}

module.exports = calculateRentalCost;
