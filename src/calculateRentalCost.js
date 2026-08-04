'use strict';

const DAILY_RENTAL_PRICE = 40;
const MEDIUM_RENTAL_DAYS = 3;
const LONG_RENTAL_DAYS = 7;
const MEDIUM_RENTAL_DISCOUNT = 20;
const LONG_RENTAL_DISCOUNT = 50;

function calculateRentalCost(numberOfDays) {
  const basePrice = numberOfDays * DAILY_RENTAL_PRICE;

  if (numberOfDays >= LONG_RENTAL_DAYS) {
    return basePrice - LONG_RENTAL_DISCOUNT;
  }

  if (numberOfDays >= MEDIUM_RENTAL_DAYS) {
    return basePrice - MEDIUM_RENTAL_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
