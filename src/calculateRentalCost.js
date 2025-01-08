/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let price;
  const pricePerDay = 40;

  if (days < 3) {
    price = days * pricePerDay;
  }

  if (days >= 3 && days < 7) {
    price = days * pricePerDay - 20;
  }

  if (days >= 7) {
    price = days * pricePerDay - 50;
  }

  return price;
}

module.exports = calculateRentalCost;
