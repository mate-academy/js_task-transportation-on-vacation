/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code hereadfasdf

  const costPerDay = 40;

  if (days < 3) {
    return days * costPerDay;
  } else if (days < 7) {
    return days * costPerDay - 20;
  } else {
    return days * costPerDay - 50;
  }
}

module.exports = calculateRentalCost;
