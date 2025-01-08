/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const firstRange = 3;
  const secondRange = 7;
  const lowerDiscount = 20;
  const higherDiscount = 50;

  if (days < firstRange) {
    const price = days * pricePerDay;

    return price;
  } else if (days >= firstRange && days < secondRange) {
    const price = days * pricePerDay - lowerDiscount;

    return price;
  } else if (days >= secondRange) {
    const price = days * pricePerDay - higherDiscount;

    return price;
  }
}

module.exports = calculateRentalCost;
