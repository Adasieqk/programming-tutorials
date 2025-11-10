// date objects = objects that contain values that represent dates and times, these date objects can be changed and formatted

const date = new Date();   // empty for current date or can enter own data (year, month 0-january, day, hour, minute, second, ms)  or 0 = 'epic' (01.01.1970)    or "2024-01-02T12:00:00Z"


// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();  // date for day number, day => ex. "monday"
// const hour = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();
// const dayOfWeek = date.getDay();

// console.log(year);
// console.log(month);   // 10 for november
// console.log(day);
// console.log(hour);
// console.log(minutes);
// console.log(seconds);
// console.log(dayOfWeek);   // 0 - sunday, 1 - monday



// date.setFullYear(2024);
// // .... 
// console.log(date);



const date1 = new Date("2025-12-31");
const date2 = new Date("2026-01-01");

if (date2 > date1) {
    console.log("Happy new year");
}