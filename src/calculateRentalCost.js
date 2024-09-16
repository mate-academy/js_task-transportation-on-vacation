/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceArendCar = 40;
  const discountFraDays = 20;
  const discountSevenDays = 50;
  const valueSeven = 7;
  const valueFre = 3;

  if (days >= valueSeven) {
    return (days * priceArendCar) - discountSevenDays;
  }

  if (days >= valueFre) {
    return (days * priceArendCar) - discountFraDays;
  }

  return days * priceArendCar;
}

module.exports = calculateRentalCost;
