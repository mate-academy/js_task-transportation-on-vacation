'use strict';

function calculateRentalCost(days) {
  const oneDayPay = 40;
  let result = oneDayPay * days;

  if (days >= 7) {
    result = oneDayPay * days - 50;
  } else if (days >= 3) {
    result = oneDayPay * days - 20;
  }

  return result;
}

module.exports = calculateRentalCost;
