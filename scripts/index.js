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

// Berekend het enkelvoud of meervoud om te plaatsen in de HTML.
function showTimeSettingSidebar() {

     if (window.localStorage.getItem("timerSettingDays") >= 1) {
          // Plaatst een teller sidebar in de pagina die nog opgevuld moet worden met de resterende tijd.
          importSidebarContent();
          if (document.getElementById("date-hour")) {
               if (window.localStorage.getItem("timerSettingDays") == 1) {
                    document.getElementById("date-hour").innerHTML = window.localStorage.getItem("timerSettingDays") + " day";
               } else {
                    document.getElementById("date-hour").innerHTML = window.localStorage.getItem("timerSettingDays") + " days";
               }
          }
          console.log(window.localStorage.getItem("timerSettingDays"));

     } else if (window.localStorage.getItem("timerSettingDays") <= 0 && window.localStorage.getItem("timerSettingHours") >= 1) {
          // Plaatst een teller sidebar in de pagina die nog opgevuld moet worden met de resterende tijd.
          importSidebarContent();
          if (document.getElementById("date-hour")) {
               if (window.localStorage.getItem("timerSettingHours") == 1) {
                    document.getElementById("date-hour").innerHTML = window.localStorage.getItem("timerSettingHours") + " hour";
               } else {
                    document.getElementById("date-hour").innerHTML = window.localStorage.getItem("timerSettingHours") + " hours";
               }
          }
          console.log(window.localStorage.getItem("timerSettingHours"));

     } else if (window.localStorage.getItem("timerSettingHours") <= 0 && window.localStorage.getItem("timerSettingMinutes") >= 1) {
          // Plaatst een teller sidebar in de pagina die nog opgevuld moet worden met de resterende tijd.
          importSidebarContent();
          if (document.getElementById("date-hour")) {
               if (window.localStorage.getItem("timerSettingMinutes") == 1) {
                    document.getElementById("date-hour").innerHTML = window.localStorage.getItem("timerSettingMinutes") + " minute";
               } else {
                    document.getElementById("date-hour").innerHTML = window.localStorage.getItem("timerSettingMinutes") + " minutes";
               }
          }
          console.log(window.localStorage.getItem("timerSettingMinutes"));

     } else if (window.localStorage.getItem("timerSettingMinutes") <= 0 && window.localStorage.getItem("timerSettingSeconds") >= 1) {
          // Plaatst een teller sidebar in de pagina die nog opgevuld moet worden met de resterende tijd.
          importSidebarContent();
          if (document.getElementById("date-hour")) {
               if (window.localStorage.getItem("timerSettingSeconds") == 1) {
                    document.getElementById("date-hour").innerHTML = window.localStorage.getItem("timerSettingSeconds") +  " second";
               } else {
                    document.getElementById("date-hour").innerHTML = window.localStorage.getItem("timerSettingSeconds") + " seconds";
               }
          }
          console.log(window.localStorage.getItem("timerSettingSeconds"));

     } else {
          // Plaatst een teller sidebar in de pagina die nog opgevuld moet worden met de resterende tijd.
          importSidebarContent();
          // Zet de timer placeholder op 0.
          emptySidebarTimeSetting();
          // Reset de timer.
          clearInterval(timer2);
          // Wist de localstorage.
          localStorage.removeItem("timerSetting");
          localStorage.removeItem("timerSettingDays");
          localStorage.removeItem("timerSettingHours");
          localStorage.removeItem("timerSettingMinutes");
          localStorage.removeItem("timerSettingSeconds");
          // Geeft een notificatie wanneer de timer gestopt is.
          notificationTimerEnd();
          console.log("Niets");
     }
}

var timer2 = setInterval(function() {
     // Resterende tijd berekenen en opslaan in localstorage.
     calculateRestingTime();
     // Berekend het enkelvoud of meervoud om te plaatsen in de HTML.
     showTimeSettingSidebar();
}, 1000);

// // Controleert in de localstorage of er een datum is ingesteld in "timersetting".
// if (localStorage.getItem("timerSetting") === null) {
//      // Zet de timer placeholder op 0.
//      emptySidebarTimeSetting();
// } else {
//      // Plaatst een teller sidebar in de pagina die nog opgevuld moet worden met de resterende tijd.
//      importSidebarContent();
//
//      var timer2 = setInterval(function() {
//           // Resterende tijd berekenen en opslaan in localstorage.
//           calculateRestingTime();
//           // Berekend het enkelvoud of meervoud om te plaatsen in de HTML.
//           showTimeSettingSidebar();
//      }, 1000);
// }
