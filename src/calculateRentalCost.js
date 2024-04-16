/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
    const dailyRate = 40;
    let totalCost = days * dailyRate;
    let discount7DaysOrMore = 50;
    let discount3DaysOrMore = 20;
    if (days >= 7) {
      totalCost -= discount7DaysOrMore;
    } else if (days >= 3) {
      totalCost -= discount3DaysOrMore;
    }
    return totalCost;
  }



module.exports = calculateRentalCost;
