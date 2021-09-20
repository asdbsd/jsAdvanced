function previousDay(year, month, day) {
    let currentDate = new Date(`${year}-${month}-${day}`);
    let newDate = new Date(currentDate.setDate(currentDate.getDate() - 1));
    console.log(`${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`);
}

previousDay(2016, 9, 30);
previousDay(2016, 10, 1);