/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const pricePerDay = 40;
  const threeDaysStay = 3;
  const sevenDaysStay = 7;

  const threeOrMoreDaysDiscount = 20;
  const sevenOrMoreDaysDiscount = 50;
  const basicPrice = days * pricePerDay;
  const lessThanThreeDaysCost = basicPrice;
  const lessThanSevenDaysCost = days * pricePerDay - threeOrMoreDaysDiscount;
  const sevenOrMoreDays = days * pricePerDay - sevenOrMoreDaysDiscount;

  if (days < threeDaysStay) {
    return lessThanThreeDaysCost;
  } else if (days < sevenDaysStay) {
    return lessThanSevenDaysCost;
  }

  return sevenOrMoreDays;
}

module.exports = calculateRentalCost;
