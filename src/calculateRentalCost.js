'use strict';

function calculateRentalCost(days) {
  const daysThree = 3;
  const daysSeven = 7;
  const getOffTwenty = 20;
  const getOffFifty = 50;
  const oneDayPay = 40;
  let result = oneDayPay * days;

  if (days >= daysSeven) {
    result = oneDayPay * days - getOffFifty;
  } else if (days >= daysThree) {
    result = oneDayPay * days - getOffTwenty;
  }

  return result;
}

module.exports = calculateRentalCost;
