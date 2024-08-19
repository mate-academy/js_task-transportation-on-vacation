/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayPrice = 40;
  let discount = 0;

  switch (true) {
    case days >= 3 && days < 7:
      discount = 20;
      break;
    case days >= 7:
      discount = 50;
      break;
    default:
      discount = 0;
  }

  return dayPrice * days - discount;
}

module.exports = calculateRentalCost;
