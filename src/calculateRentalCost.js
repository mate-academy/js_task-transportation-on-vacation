/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let daysSpend = days * 40;

  if (days >= 3 && days < 7) {
    daysSpend -= 20;

    return daysSpend;
  } else if (days >= 7) {
    daysSpend -= 50;

    return daysSpend;
  } else {
    return daysSpend;
  }
}

module.exports = calculateRentalCost;
