'use strict';

/**
 * After a hard quarter in the office you decide
 * to get some rest on a vacation.
 * So you will book a flight for you
 * and your family and try to leave all the mess behind you.
 *
 * You will need a rental car in order for you to get around in your vacation.
 * The manager of the car rental makes you some good offers.
 *
 * Every day you rent the car costs $40.
 * If you rent the car for 7 or more days, you get $50 off your total.
 * Alternatively, if you rent the car for 3 or more days,
 * you get $20 off your total.
 *
 * Implement calculateRentalCost function
 * which returns the total amount for different count of days.
 *
 * Examples:
 *  - calculateRentalCost(1) === 40
 *  - calculateRentalCost(3) === 100
 *  - calculateRentalCost(7) === 230
 *
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  let cost1day = 40;
  let cost3days = 100;
  let cost7days = 230;
  let mainCost1 = 0;
  let mainCost3 = 0;
  let mainCost7 = 0;
  let totalCost = 0;

  switch (days) {
    case 1:
      return cost1day;
    case 2:
      totalCost += cost1day * 2;

      return totalCost;
    case 3:
      return cost3days;
    case 7:
      return cost7days;
  }

  switch (days % 7) {
    case 1:
      mainCost7 += ((days - 1) / 7) * cost7days;
      mainCost1 += 1 * cost1day;
      totalCost += mainCost7 + mainCost1;

      return totalCost;
    case 2:
      mainCost7 += ((days - 2) / 7) * cost7days;
      mainCost1 += 2 * cost1day;
      totalCost += mainCost7 + mainCost1;

      return totalCost;
    case 3:
      mainCost7 += ((days - 3) / 7) * cost7days;
      mainCost3 += 3 * cost3days;
      totalCost += mainCost7 + mainCost3;

      return totalCost;
    case 4:
      mainCost7 += ((days - 4) / 7) * cost7days;
      mainCost3 += (4 - 1) * cost3days;
      mainCost1 += 1 * cost1day;
      totalCost += mainCost7 + mainCost3 + mainCost1;

      return totalCost;
    case 5:
      mainCost7 += ((days - 5) / 7) * cost7days;
      mainCost3 += (5 - 2) * cost3days;
      mainCost1 += 2 * cost1day;
      totalCost += mainCost7 + mainCost3 + mainCost1;

      return totalCost;
    case 6:
      mainCost7 += ((days - 6) / 7) * cost7days;
      mainCost3 += 6 * cost3days;
      totalCost += mainCost7 + mainCost3;

      return totalCost;
  }
}

module.exports = calculateRentalCost;
