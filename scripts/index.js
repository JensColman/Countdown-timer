/*jshint esversion: 6 */

// ---------------------- Functions ---------------------- \\

// Plaatst een teller sidebar in de pagina die nog opgevuld moet worden met de resterende tijd.
function importSidebarContent() {
     if (document.getElementById("sidebar")) {
          document.getElementById("sidebar").innerHTML = '<h5><span id="date"></span><span id="date-hour"></span><br></h5><h6>remaining</h6>';
     }
}

// Zet de timer placeholder op 0.
function emptySidebarTimeSetting() {
     if (document.getElementById("date")) {
          document.getElementById("date").innerHTML = "0";
     }
     if (document.getElementById("date-hour")) {
          document.getElementById("date-hour").innerHTML = " days";
     }
}

if (window.localStorage.getItem("timerSettingDays") >= 1) {
     importSidebarContent();
     if (document.getElementById("date-hour")) {
          if (window.localStorage.getItem("timerSettingDays") == 1) {
               document.getElementById("date-hour").innerHTML = " day";
          } else {
               document.getElementById("date-hour").innerHTML = " days";
          }
     }
     console.log("Days");

} else if (window.localStorage.getItem("timerSettingDays") <= 0 && window.localStorage.getItem("timerSettingHours") >= 1) {
     importSidebarContent();
     if (document.getElementById("date-hour")) {
          if (window.localStorage.getItem("timerSettingHours") == 1) {
               document.getElementById("date-hour").innerHTML = " hour";
          } else {
               document.getElementById("date-hour").innerHTML = " hours";
          }
     }
     console.log("Hours");

} else if (window.localStorage.getItem("timerSettingHours") <= 0 && window.localStorage.getItem("timerSettingMinutes") >= 1) {
     importSidebarContent();
     if (document.getElementById("date-hour")) {
          if (window.localStorage.getItem("timerSettingMinutes") == 1) {
               document.getElementById("date-hour").innerHTML = " minute";
          } else {
               document.getElementById("date-hour").innerHTML = " minutes";
          }
     }
     console.log("Minutes");

} else if (window.localStorage.getItem("timerSettingMinutes") <= 0 && window.localStorage.getItem("timerSettingSeconds") >= 1) {
     importSidebarContent();
     if (document.getElementById("date-hour")) {
          if (window.localStorage.getItem("timerSettingSeconds") == 1) {
               document.getElementById("date-hour").innerHTML = " second";
          } else {
               document.getElementById("date-hour").innerHTML = " seconds";
          }
     }
     console.log("Seconds");

} else {
     importSidebarContent();
     emptySidebarTimeSetting();
     console.log("Niets");
}

// Kijken of ik de tellerfunctie kan gebruiken.



     document.getElementById("days").innerHTML = window.localStorage.getItem(
          "timerSettingDays"
     );
     if (window.localStorage.getItem("timerSettingDays") == 1) {
          document.getElementById("days2").innerHTML = " day, ";
     } else {
          document.getElementById("days2").innerHTML = " days, ";
     }

     document.getElementById("hours").innerHTML = window.localStorage.getItem(
          "timerSettingHours"
     );
     if (window.localStorage.getItem("timerSettingHours") == 1) {
          document.getElementById("hours2").innerHTML = " hour, ";
     } else {
          document.getElementById("hours2").innerHTML = " hours, ";
     }

     document.getElementById("minutes").innerHTML = window.localStorage.getItem(
          "timerSettingMinutes"
     );
     if (window.localStorage.getItem("timerSettingMinutes") == 1) {
          document.getElementById("minutes2").innerHTML = " minute and ";
     } else {
          document.getElementById("minutes2").innerHTML = " minutes and ";
     }

     document.getElementById("seconds").innerHTML = window.localStorage.getItem(
          "timerSettingSeconds"
     );
     if (window.localStorage.getItem("timerSettingSeconds") == 1) {
          document.getElementById("seconds2").innerHTML = " second left";
     } else {
          document.getElementById("seconds2").innerHTML = " seconds left";
     }
