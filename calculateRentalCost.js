function calculateRentalCost(days) {
    const DAILY_COST = 40;
    const DISCOUNT_SMALL = 20;
    const DISCOUNT_LARGE = 50;
    const DAYS_SMALL = 3;
    const DAYS_LARGE = 7;
    
    if (days >= DAYS_LARGE) return days * DAILY_COST - DISCOUNT_LARGE;
    if (days >= DAYS_SMALL) return days * DAILY_COST - DISCOUNT_SMALL;
    
    return days * DAILY_COST;
}
