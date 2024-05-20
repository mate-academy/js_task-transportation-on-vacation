/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const daylyRent = 40;
  let amount = days * daylyRent;

  if (days <= 3) {
    amount = days * daylyRent;

    // return amount;
  }

  if (days >= 3 && days < 7) {
    amount = days * daylyRent - 20;

    return amount;
  }

  if (days >= 7) {
    amount = days * daylyRent - 50;

    // return amount;
  }

  return amount;
}

module.exports = calculateRentalCost;
