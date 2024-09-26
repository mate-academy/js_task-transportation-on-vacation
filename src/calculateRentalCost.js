/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceCarPerDay = 40;
  const discountSevenOrMoreDays = 50;
  const discountFromThreeToSixDays = 20;

  if (days < 3) {
    return days * priceCarPerDay;
  } else if (days >= 3 && days <= 6) {
    return priceCarPerDay * days - discountFromThreeToSixDays;
  } else {
    return priceCarPerDay * days - discountSevenOrMoreDays;
  }
}

module.exports = calculateRentalCost;
