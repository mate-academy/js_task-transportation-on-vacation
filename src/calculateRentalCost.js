/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const discountForSevenDays = 50;
  const discountForThreeDays = 20;
  const pricePerCar = 40;
  let totalPrice = 0;

  if (days >= 7) {
    totalPrice = pricePerCar * days - discountForSevenDays;

    return totalPrice;
  }

  if (days >= 3) {
    totalPrice = pricePerCar * days - discountForThreeDays;

    return totalPrice;
  }

  if (days === 2) {
    totalPrice = pricePerCar + pricePerCar;

    return totalPrice;
  } else {
    return pricePerCar;
  }
}

module.exports = calculateRentalCost;
