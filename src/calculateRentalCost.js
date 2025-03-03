/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  const price = 40;

  const offers = {
    3: 20,
    7: 50,
  };

  let discount = 0;

  if (days >= 7) {
    discount = offers['7'];
  } else if (days >= 3) {
    discount = offers['3'];
  }

  return days * price - discount;
}

module.exports = calculateRentalCost;
