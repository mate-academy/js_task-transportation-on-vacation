function calculateRentalCost(days) {
  const daysPrice = 40;
  const discountThreeDays = 20;
  const discountSevenDays = 50;
  let sum = days * daysPrice;

  if (days >= 7) {
    sum -= discountSevenDays;
  } else if (days >= 3 && days < 7) {
    sum -= discountThreeDays;
  }

  return sum;
}

module.exports = calculateRentalCost;
