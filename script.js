function getISOWeekNumber(date) {
    // Copy the date object to avoid modifying the original date
    const newDate = new Date(date);
    
    // Set the date to the first day of the year
    newDate.setMonth(0, 1);
  
    // Get the day of the week for the first day of the year
    const dayOfWeek = newDate.getDay();
  
    // Move to the first Thursday of the year
    newDate.setDate(1 + (dayOfWeek <= 4 ? 4 - dayOfWeek : 11 - dayOfWeek));
  
    // Calculate the week number
    const weekNumber = Math.ceil((((date - newDate) / 86400000) + 1) / 7);
  
    return weekNumber;
  }
  
  // Example usage:
  const currentDate = new Date();
  const weekNumber = getISOWeekNumber(currentDate);
  console.log("ISO Week Number:", weekNumber);

  const weekHeader = document.getElementById("weekHeader");
  weekHeader.textContent = weekNumber;