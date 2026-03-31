/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  switch (days > 0) {
    case days < 3:
      return days * 40;

    case days <= 6:
      return days * 40 - 20;

    case days >= 7:
      return days * 40 - 50;
  }
}

module.exports = calculateRentalCost;
