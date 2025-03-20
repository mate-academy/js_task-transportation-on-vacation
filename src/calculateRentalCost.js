/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let aPagar = 0;

  if (days <= 2) {
    for (let i = 0; i < days; i++) {
      aPagar += 40;
    }

    return aPagar;
  }

  if (days >= 3 && days <= 6) {
    for (let i = 0; i < days; i++) {
      aPagar += 40;
    }

    return aPagar - 20;
  }

  if (days >= 7) {
    for (let i = 0; i < days; i++) {
      aPagar += 40;
    }

    return aPagar - 50;
  }
}

module.exports = calculateRentalCost;
