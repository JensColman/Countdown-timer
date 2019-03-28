/*jshint esversion: 6 */

// ---------------------- Functions ---------------------- \\

// Plaatst een teller sidebar in de pagina die nog opgevuld moet worden met de resterende tijd.
function importSidebarContent() {
     document.getElementById("sidebar").innerHTML = '<h5><span id="date"></span><span id="date-hour"></span><br></h5><h6>remaining</h6>';
}

// Zet de timer placeholder op 0.
function emptySidebarTimeSetting() {
     document.getElementById("date").innerHTML = "0 ";
     document.getElementById("date-hour").innerHTML = "days";
}

// Eigen tijd opvragen.
var now = new Date().getTime();
// Parsed de ingestelde tijd om te kunnen gebruiken tijdens de bewerking.
var countdownDate4 = Date.parse(window.localStorage.getItem("timerSetting"));
// Berekenen hoeveel tijd er tussen de ingestelde- en de eigen tijd zit.
var distance = countdownDate4 - now;
// Resterende dagen berekenen.
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
// Resterende uren berekenen.
var hours = Math.floor(
     (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
);
// Resterende minuten berekenen.
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
// Resterende seconden berekenen.
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

if (days >= 1) {
     importSidebarContent();
     console.log("Days");
} else if (days <= 0 && hours >= 1) {
     importSidebarContent();
     console.log("Hours");
} else if (hours <= 0 && minutes >= 1) {
     importSidebarContent();
     console.log("Minutes");
} else if (minutes <= 0 && seconds >= 1) {
     importSidebarContent();
     console.log("Seconds");
} else {
     importSidebarContent();
     emptySidebarTimeSetting();
     console.log("Niets");
}

// Kijken of ik de tellerfunctie kan gebruiken.



     // document.getElementById("days").innerHTML = window.localStorage.getItem(
     //      "timerSettingDays"
     // );
     // if (window.localStorage.getItem("timerSettingDays") == 1) {
     //      document.getElementById("days2").innerHTML = " day, ";
     // } else {
     //      document.getElementById("days2").innerHTML = " days, ";
     // }
     //
     // document.getElementById("hours").innerHTML = window.localStorage.getItem(
     //      "timerSettingHours"
     // );
     // if (window.localStorage.getItem("timerSettingHours") == 1) {
     //      document.getElementById("hours2").innerHTML = " hour, ";
     // } else {
     //      document.getElementById("hours2").innerHTML = " hours, ";
     // }
     //
     // document.getElementById("minutes").innerHTML = window.localStorage.getItem(
     //      "timerSettingMinutes"
     // );
     // if (window.localStorage.getItem("timerSettingMinutes") == 1) {
     //      document.getElementById("minutes2").innerHTML = " minute and ";
     // } else {
     //      document.getElementById("minutes2").innerHTML = " minutes and ";
     // }
     //
     // document.getElementById("seconds").innerHTML = window.localStorage.getItem(
     //      "timerSettingSeconds"
     // );
     // if (window.localStorage.getItem("timerSettingSeconds") == 1) {
     //      document.getElementById("seconds2").innerHTML = " second left";
     // } else {
     //      document.getElementById("seconds2").innerHTML = " seconds left";
     // }
//}
