"use strict";

const DayPrice = 40;
const SmallDiscount = 20;
const BigDiscount = 50;

function calculateRentalCost(days) {
  const totalCost = DayPrice * days;  //Calculate the total cost without any discounts

  if (days >= 7) {
    totalCost -= BigDiscount; //The big discount if renting 7 or more days
  } else if (days >= 3) {
    totalCost -= SmallDiscount;  //The small discount if renting 3 or more days
  }
  return totalCost;
}

module.exports = calculateRentalCost;



/*
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
 */