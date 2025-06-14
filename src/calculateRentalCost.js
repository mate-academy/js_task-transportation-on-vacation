const dailyRentalRate = 40;

const minDaysFor7DayDiscount = 7;
const minDaysFor3DayDiscount = 3;
const discountFor3Days = 20;
const discountFor7Days = 50;

function calculateRentalCost(days) {
  if (days >= minDaysFor7DayDiscount) {
    return days * dailyRentalRate - discountFor7Days;
  } else if (days >= minDaysFor3DayDiscount) {
    return days * dailyRentalRate - discountFor3Days;
  } else {
    return days * dailyRentalRate;
  }
}

module.exports = calculateRentalCost;
