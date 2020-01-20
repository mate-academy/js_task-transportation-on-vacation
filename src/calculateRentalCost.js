'use strict';

/**
 * After a hard quarter in the office you decide to get some rest
 * on a vacation. So you will book a flight for you and your girlfriend
 * and try to leave all the mess behind you.
 *
 * You will need a rental car in order for you to get around in your
 * vacation. The manager of the car rental makes you some good offers.
 *
 * Every day you rent the car costs $40. If you rent the car for 7 or
 * more days, you get $50 off your total. Alternatively, if you rent
 * the car for 3 or more days, you get $20 off your total.
 *
 * Implement calculateRentalCost function which returns the total
 * amount for different count of days.
 *
 * @param {number} days
 *
 * @return {number}
 */
const DAY_PRICE = 40;
const LOW_OFF_VALUE = 20;
const HIGH_OFF_VALUE = 50;
const LOW_DAYS_OFF = 3;
const HIGH_DAYS_OFF = 7;

function calculateRentalCost(days) {
  if (days < LOW_DAYS_OFF) {
    return days * DAY_PRICE;
  } else if (days >= LOW_DAYS_OFF && days < HIGH_DAYS_OFF) {
    return (days * DAY_PRICE) - LOW_OFF_VALUE;
  } else {
    return (days * DAY_PRICE) - HIGH_OFF_VALUE;
  }
}

module.exports = calculateRentalCost;
