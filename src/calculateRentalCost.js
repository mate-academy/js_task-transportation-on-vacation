/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const threedays = 20;
  const sevendays = 50;
  const rent = 40;
  if (days >= 3 && days < 7) {
    return (rent * days - threedays); // write code here
  } else if (days >= 7) {
    return (rent * days - sevendays);
  } else {
    return days * rent;
  }
}
module.exports = calculateRentalCost;
