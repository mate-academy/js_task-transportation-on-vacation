/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let totalAmount = days * 40;

  switch (true) {
    case days >= 7: {
      totalAmount -= 50;
      break;
    }

    case days >= 3: {
      totalAmount -= 20;
      break;
    }
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
