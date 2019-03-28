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
