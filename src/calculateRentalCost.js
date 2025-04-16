function calculateRentalCost(days) {
  const rentPerDay = 40;
  const discountFor3Days = 20;
  const discountFor7Days = 50;

  const rentWithoutDiscount = rentPerDay * days;

  if (days >= 3 && days < 7) {
    return rentWithoutDiscount - discountFor3Days;
  } else if (days >= 7) {
    return rentWithoutDiscount - discountFor7Days;
  } else {
    return rentWithoutDiscount;
  }
}
module.exports = calculateRentalCost;
