/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  // calculate cost of rental
  // if rent for 3 days or more $20 discount
  // if rent for 7 days or more $50 discount

  const price = 40;

  if (days < 3) {
    return days * price;
  } else if (days >= 3 && days <= 6) {
    return days * price - 20;
  } else if (days > 6) {
    return days * price - 50;
  }
}

module.exports = calculateRentalCost;
