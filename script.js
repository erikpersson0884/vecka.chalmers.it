function getWeekNumber() {
  date = new Date();
  date.setHours(0, 0, 0, 0);
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  date.setDate(date.getDate() + 4 - (date.getDay() || 7));
  // Get first day of year
  var yearStart = new Date(date.getFullYear(), 0, 1);
  // Calculate full weeks to nearest Thursday
  var weekNumber = Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
  return weekNumber;
}

function setWeekHeader() {
  const weekHeader = document.getElementById("weekHeader");
  const weekNumber = getWeekNumber();

  weekHeader.textContent = weekNumber;
}

setWeekHeader();



setTimeout(() => {
  const footer = document.getElementsByTagName("footer")[0];
  footer.classList.add("footer--hidden");
}, 3000)