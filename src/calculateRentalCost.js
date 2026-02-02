function calculateRentalCost(days) {
  const pricePerDay = 40;
  const discountForSevenDays = 50;
  const discountForThreeDays = 20;
  const minDaysForBigDiscount = 7;
  const minDaysForSmallDiscount = 3;

  if (days >= minDaysForBigDiscount) {
    return days * pricePerDay - discountForSevenDays;
  }

  if (days >= minDaysForSmallDiscount) {
    return days * pricePerDay - discountForThreeDays;
  }

  return days * pricePerDay;
}

module.exports = calculateRentalCost;
