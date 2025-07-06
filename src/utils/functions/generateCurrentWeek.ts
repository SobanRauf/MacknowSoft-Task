export const generateCurrentWeekDates = () => {
    const today = new Date();
    const currentDayIndex = today.getDay();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - currentDayIndex);

    const week = [];

    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);

      week.push({
        day: dayNames[day.getDay()],
        date: day.getDate().toString().padStart(2, "0"),
      });
    }
    return week;
  };